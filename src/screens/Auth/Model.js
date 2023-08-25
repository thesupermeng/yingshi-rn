import urls from '../../config/urls';
import Http from '../../utils/http';
import {refreshUserToken, updateAnonymous} from '~redux/auth/authSlice';

let user_token = '';
let refresh_token = '';

const refreshToken = async (
  refresh_token = refresh_token,
  updateTokenFunction,
) => {
  console.log('refreshing token from cricket user');
  let result = await Http.post(urls.cricketUserBase + '/refresh', {
    refresh_token: refresh_token,
  });
  if (result.code === 2006) {
    // refresh token expired
    Logout(updateTokenFunction);
  }
  let token = {
    user_token: result.data.user_token,
    refresh_token: result.data.refresh_token,
  };
  updateTokenFunction(token);
  return token;
};

export const Logout = updateTokenFunction => {
  console.log('logout');
  refresh_token = '';
  user_token = '';
  if (updateTokenFunction) {
    updateTokenFunction({refresh_token: '', user_token: ''});
  }
};

export const loginApiCall = async emailPayload => {
  console.log('loginApicall');
  let result = await Http.post(urls.cricketUserBase + '/login', emailPayload);
  console.log(emailPayload);
  console.log(urls.cricketUserBase + '/login');
};

export const otpApiCall = async (
  OTPPayload,
  dispatch,
  user_token,
  refresh_token,
) => {
  let result = await Http.post(urls.cricketUserBase + '/verify', OTPPayload, {
    user_token: user_token,
  });
  if (result.code === 2006) {
    let new_user_token = await refreshToken(refresh_token, token => {
      dispatch(refreshUserToken(token));
    });
    return await otpApiCall(
      OTPPayload,
      dispatch,
      new_user_token.user_token,
      new_user_token.refresh_token,
    );
  } else if (result.code === 0) {
    // verified, need to save token
    let token = {
      user_token: result.data.user_token,
      refresh_token: result.data.refresh_token,
    };
    dispatch(
      refreshUserToken({
        user_token: token.user_token,
        refresh_token: token.refresh_token,
      }),
    );
    // verified, need to update anonymous
    dispatch(updateAnonymous({anonymous: false}));
    if (result.data.new) {
      return {state: 'new', data: result.data};
    } else {
      return {state: 'existing', data: result.data};
    }
  } else if (result.code === 2003) {
    // otp Invalid
    return {state: 'otp Invalid'};
  } else if (result.code === 2004) {
    // otp expired
    return {state: 'otp expired'};
  }

  return result;
};

export const saveNickname = async (
  nicknamePayload,
  user_token = user_token,
  refresh_token = refresh_token,
  updateTokenFunction = undefined,
) => {
  if (user_token === '') {
    // 1st time log in may not have token
    return 'not login';
  }
  console.log('try to save nick name');
  let result = await Http.post(
    urls.cricketUserBase + '/set-nickname',
    nicknamePayload,
    {user_token: user_token},
  );
  console.log('try to save nick name', result);

  if (result.code === 0 || result.code === 2016) {
    return 'success';
  } else if (result.code === 2006) {
    //token has expired
    let token = await refreshToken(refresh_token, updateTokenFunction);
    return await saveNickname(
      nicknamePayload,
      token.user_token,
      token.refresh_token,
      updateTokenFunction,
    );
  } else if (result.code === 2015) {
    return 'duplicated';
  }
};

export const getUserInfo = async (
  user_token = user_token,
  refresh_token = refresh_token,
  updateTokenFunction = undefined,
  autoRecall = true,
) => {
  if (user_token === '' || user_token === undefined) {
    console.log('there is no user_token provided, return not login');
    return 'not login';
  }
  if (user_token) {
    // query user info
    console.log('try to fetch user info');
    let result = await Http.post(
      urls.cricketUserBase + '/info',
      {},
      {user_token: user_token},
    );
    if (result.code === 2006) {
      //token has expired
      let token = await refreshToken(refresh_token, updateTokenFunction);
      if (autoRecall) {
        return await getUserInfo(
          token.user_token,
          token.refresh_token,
          updateTokenFunction,
        );
      } else {
        console.log('not retry fucntion, because the hook will handle retry');
        return 'not retry fucntion, because the hook will handle retry';
      }
    }
    if (result.code === -1) {
      console.log('get user info failed, api internal error');
      return 'not login';
    }
    console.log(result);
    let user_info = {
      email: result.data.email,
      nickname: result.data.nickname,
      dp: result.data.display_photo_url,
      subscription: result.data.subscription,
    };
    return user_info;
  } else {
    return 'not login';
  }
};

// export const submitFeedback = async payload => {
//   console.log('submit feedback');
//   if (user_token === '') {
//     // 1st time log in may not have token
//     let toeknStatus = await reloadToken();
//     if (toeknStatus === 'not login') {
//       return 'not login';
//     }
//   }
//   let result = await Http.post(urls.cricketUserBase + '/feedback', payload, {
//     user_token: user_token,
//   });
//   if (result.code === 0) {
//     return 'success';
//   } else if (result.code === 2006) {
//     //token has expired
//     await refreshToken();
//     return await submitFeedback(payload);
//   }
// };

export const deleteAccountApiCall = async updateTokenFunction => {
  console.log('delete account');
  if (user_token === '') {
    return 'not login';
  }
  // server update
  let result = await Http.post(
    urls.cricketUserBase + '/delete',
    {},
    {user_token: user_token},
  );
  // token remove
  Logout(updateTokenFunction);
  if (result.code === 0) {
    return 'success';
  }
};

// export const uploadDp = async dp => {
//   if (user_token === '') {
//     // 1st time log in may not have token
//     let toeknStatus = await reloadToken();
//     if (toeknStatus === 'not login') {
//       return 'not login';
//     }
//   }
//   console.log(user_token);
//   Http.post(urls.cricketUserBase + '/update-dp', createFormData(dp), {
//     user_token: user_token,
//     'Content-Type': 'multipart/form-data',
//   })
//     .then(response => {
//       console.log('upload succes', response);
//       if (result.code === 0) {
//         return 'success';
//       } else if (result.code === 2006) {
//         //token has expired
//         refreshToken().then(() => {
//           uploadDp(dp);
//         });
//       }
//     })
//     .catch(error => {
//       console.log('upload error', error);
//       alert('Upload failed!');
//     });
// };

const createFormData = photo => {
  const data = new FormData();

  data.append('photo', {
    uri: photo.path,
    name: 'display_photo.jpg',
    type: photo.mime,
  });

  return data;
};

export const anonymousLoginApiCall = async () => {
  let token = await Http.post(
    urls.cricketUserBase + '/anonymous_login',
    {},
    {},
  );
  return token;
};

import {API_DOMAIN, API_DOMAIN_TEST} from '../utility/constants';
import axios from 'axios';
import {useAppSelector} from '../hooks/hooks';
import {RootState} from '../redux/store';

//import {refreshUserToken, updateAnonymous} from '~redux/auth/authSlice';

let user_token = '';
let refresh_token = '';
// new code
export const registerUser = async ({
  email,
  referral_code,
  device_id,
  otp,
}: any) => {
  console.log('registerUser');

  let json = {
    email: email,
    referral_code: referral_code,
    device_id: device_id,
    otp: otp,
  };
  console.log('json');
  console.log(json);
  let result = await axios.post(API_DOMAIN_TEST + 'users/v1/register', json);
  console.log('result');
  console.log(result);
  return result;
};

export const loginUser = async ({email, otp}: any) => {
  console.log('registerUser');

  let json = {
    email: email,
    otp: otp,
  };
  console.log('json');
  console.log(json);
  let result = await axios.post(API_DOMAIN_TEST + 'users/v1/login', json);
  console.log('result');
  console.log(result);
  return result;
};

export const updateUsername = async ({username, bearerToken}: any) => {
  console.log('updateUsername');
  // const userState = useAppSelector(({userReducer}: RootState) => userReducer);
  // const bearerToken = userState.userToken;

  console.log('bearerToken');
  console.log(bearerToken);

  // Define your request headers
  const headers = {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json', // Set your content type accordingly
  };

  let json = {
    username: username,
  };

  let result = await axios.post(API_DOMAIN_TEST + 'users/v1/update', json, {
    headers: headers,
  });

  return result;
};

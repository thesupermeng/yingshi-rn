import {userModel} from '../../types/userType';

export interface UserActionType {
  type: string;
  payload: userModel;
}

const initialState: userModel = {
  userToken: '',
  userId: '',
  userName: '',
  userReferralCode: '',
  userEmail: '',
  userMemberExpired: '',
  userReferrerName: '',
  userEndDaysCount: 0,
  userTotalInvite: 0,
  userAccumulateRewardDay: 0,
  userAllowUpdateReferral: false,
  userInvitedUserList: [],
};

export function userReducer(state = initialState, action: UserActionType) {
  console.log('userReducer general');
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'remove_user_auth':
      return {
        userToken: '',
        userId: '',
        userName: '',
        userReferralCode: '',
        userEmail: '',
        userMemberExpired: '',
        userReferrerName: '',
        userEndDaysCount: 0,
        userTotalInvite: 0,
        userAccumulateRewardDay: 0,
        userAllowUpdateReferral: false,
        userInvitedUserList: [],
      };
    case 'add_user_auth':
      console.log('add_user_auth reducer');
      console.log(state);
      let json = {
        userToken: action.payload.userToken,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userReferralCode: action.payload.userReferralCode,
        userEmail: action.payload.userEmail,
        userMemberExpired: action.payload.userMemberExpired,
        userReferrerName: action.payload.userReferrerName,
        userEndDaysCount: action.payload.userEndDaysCount,
        userTotalInvite: action.payload.userTotalInvite,
        userAccumulateRewardDay: action.payload.userAccumulateRewardDay,
        userAllowUpdateReferral: action.payload.userAllowUpdateReferral,
        userInvitedUserList: action.payload.userInvitedUserList,
      };
      console.log('stored user state');
      console.log(json);
      return {
        ...json,
      };
    case 'update_user_username':
      console.log('update_user_username reducer');
      return {
        ...state,
        userName: action.payload,
      };
    default:
      console.log('default');
      return state;
  }
}

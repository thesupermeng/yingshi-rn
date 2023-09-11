import {userModel} from '../../types/userType';

// export interface UserActionType {
//   type: string;
//   payload: userModel;
// }

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
  userCurrentTimestamp: '',
};

export function userReducer(state = initialState, action: any) {
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
        userCurrentTimestamp: '',
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
        userCurrentTimestamp: action.payload.userCurrentTimestamp,
        userInvitedUserList: action.payload.userInvitedUserList
          ? action.payload.userInvitedUserList
          : [],
      };

      return {
        ...json,
      };
    case 'update_user_auth':
      console.log('update_user_auth');
      // console.log(state);
      // console.log(action.payload);
      let updatedState = {
        userName: action.payload.user.user_name,
        userReferralCode: action.payload.user.user_referral_code,
        userEmail: action.payload.user.user_email,
        userMemberExpired: action.payload.user.vip_end_time,
        userReferrerName: action.payload.user.referrer_name,
        userEndDaysCount: action.payload.user.user_vip_time_duration_days,
        userTotalInvite: action.payload.user.total_invited_user,
        userAccumulateRewardDay:
          action.payload.user.accumulated_vip_reward_days,
        userAllowUpdateReferral: action.payload.user.eligible_update_referrer,
        userCurrentTimestamp: action.payload.user.current_timestamp,
        userInvitedUserList: action.payload.user.invited_users,
      };

      return {
        ...state,
        ...updatedState,
      };

    case 'update_user_username':
      console.log('update_user_username reducer');
      return {
        ...state,
        userName: action.payload,
      };
    case 'update_user_referral':
      return {
        ...state,
        userReferrerName: action.payload,
      };
    default:
      return state;
  }
}

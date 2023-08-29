import {
  ADD_SEARCH_HISTORY,
  REMOVE_SEARCH_HISTORY,
  CLEAR_SEARCH_HISTORY,
} from '../../utility/constants';

export interface UserActionType {
  type: string;
  payload: string;
}

export interface userModel {
  userToken: string;
  userId: string;
  userName: string;
  userReferralCode: string;
  userEmail: string;
  userMemberExpired: string;
}

const initialState: userModel = {
  userToken: '',
  userId: '',
  userName: '',
  userReferralCode: '',
  userEmail: '',
  userMemberExpired: '',
};

export function userReducer(state = initialState, action: UserActionType) {
  switch (action.type) {
    case 'remove_user_auth':
      return {
        userToken: '',
        userId: '',
        userName: '',
        userReferralCode: '',
        userEmail: '',
        userMemberExpired: '',
      };
    case 'add_user_auth':
      return {
        userToken: state.userToken,
        userId: state.userId,
        userName: state.userName,
        userReferralCode: state.userReferralCode,
        userEmail: state.userEmail,
        userMemberExpired: state.userMemberExpired,
      };
    default:
      return state;
  }
}

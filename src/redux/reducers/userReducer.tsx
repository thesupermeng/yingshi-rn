import {
  ADD_SEARCH_HISTORY,
  REMOVE_SEARCH_HISTORY,
  CLEAR_SEARCH_HISTORY,
} from '../../utility/constants';

export interface UserActionType {
  type: string;
  payload: userModel;
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
      };
    case 'add_user_auth':
      console.log('add_user_auth reducer');
      console.log(state);
      return {
        userToken: action.payload.userToken,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userReferralCode: action.payload.userReferralCode,
        userEmail: action.payload.userEmail,
        userMemberExpired: action.payload.userMemberExpired,
      };
    default:
      console.log('default');
      return state;
  }
}

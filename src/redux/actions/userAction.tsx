// dont use constants first to prevent conflict

// import {
//     ADD_USER_AUTH, REMOVE_USER_AUTH
// } from "../../utility/constants";

type userModel = {
  userToken: string;
  userId: string;
  userName: string;
  userReferralCode: string;
  userEmail: string;
  userMemberExpired: string;
};

export const addUserAuthState = (user: userModel) => ({
  type: 'add_user_auth',
  payload: user,
});

export const removeUserAuthState = () => ({
  type: 'remove_user_auth',
});

export const updateUsernameState = (userName: string) => ({
  type: 'update_user_username',
  payload: userName,
});

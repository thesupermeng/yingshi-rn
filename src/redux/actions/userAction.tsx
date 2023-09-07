import {userModel} from '../../types/userType';

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

export const updateUserReferral = (referral: string) => ({
  type: 'update_user_referral',
  payload: referral,
});

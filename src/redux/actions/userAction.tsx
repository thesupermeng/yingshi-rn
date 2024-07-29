import { User } from '@models';

export const addUserAuthState = (user: User) => ({
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

export const updateUserAuth = (updatedState: any) => ({
  type: 'update_user_auth',
  payload: updatedState,
});

export const updateAhaUnique = () => ({
  type: 'update_aha_unique'
});
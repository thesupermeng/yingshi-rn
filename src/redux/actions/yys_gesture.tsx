import { yys_RelatedTooltips } from '@models/yys_project_pagination';

export const addUserAuthState = (user: yys_RelatedTooltips) => ({
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

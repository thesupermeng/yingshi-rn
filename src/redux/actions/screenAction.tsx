// dont use constants first to prevent conflict in other file

// export const showScreenAction = (action: boolean) => ({
//   type: 'show_screen_action',
//   payload: action,
// });

export const changeScreenAction = (action: string) => ({
  type: 'change_screen_action',
  payload: action,
});

export const removeScreenAction = () => ({
  type: 'remove_screen_action',
});

export const showLoginAction = () => ({
  type: 'show_login_action',
});

export const hideLoginAction = () => ({
  type: 'hide_login_action',
});

export const showRegisterAction = () => ({
  type: 'show_register_action',
});

export const hideRegisterAction = () => ({
  type: 'hide_register_action',
});

export const hideBottomSheetAction = () => ({
  type: 'hide_bottom_sheet_action',
});
export const resetBottomSheetAction = () => ({
  type: 'reset_bottom_sheet_action',
});

export const resetBottomSheetForm = () => ({
  type: 'reset_bottom_sheet_form',
});
export const initialBottomSheetForm = () => ({
  type: 'initial_bottom_sheet_from',
});

export const navigateToProfileScreen = () => ({
  type: 'navigate_to_profile_screen',
});
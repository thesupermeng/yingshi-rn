export interface screenActionType {
  type: string;
  payload: string;
}

import {screenModel} from '../../types/screenType';

const initialState: screenModel = {
  screenAction: '',
  screenShow: false,
  loginShow: false,
  registerShow: false,
  resetBottomSheet: false,
};

export function screenReducer(state = initialState, action: screenActionType) {
  switch (action.type) {
    case 'remove_screen_action':
      console.log('remove_screen_action');
      return {
        ...state,
        screenShow: false,
      };
    case 'change_screen_action':
      console.log('change_screen_action');
      return {
        ...state,
        screenShow: true,
        screenAction: action.payload,
      };
    case 'show_login_action':
      console.log('show_login_action');
      return {
        ...state,
        loginShow: true,
      };
    case 'hide_login_action':
      console.log('hide_login_action');
      return {
        ...state,
        loginShow: false,
      };
    case 'show_register_action':
      console.log('show_register_action');
      return {
        ...state,
        registerShow: true,
      };
    case 'hide_register_action':
      console.log('hide_register_action');
      return {
        ...state,
        registerShow: false,
      };
    case 'hide_bottom_sheet_action':
      console.log('hide_bottom_sheet_action');
      return {
        ...state,
        resetBottomSheet: true,
      };
    case 'reset_bottom_sheet_action':
      console.log('reset_bottom_sheet_action');
      return {
        ...state,
        resetBottomSheet: false,
      };

    default:
      return state;
  }
}

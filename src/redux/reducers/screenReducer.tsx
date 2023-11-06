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
  resetInputForm: false,
  navigateToProfile: false,
  sportWatchTime: 0,
};

export function screenReducer(state = initialState, action: screenActionType) {
  switch (action.type) {
    case 'remove_screen_action':
      return {
        ...state,
        screenShow: false,
      };
    case 'change_screen_action':
      return {
        ...state,
        screenShow: true,
        screenAction: action.payload,
      };
    case 'show_login_action':
      return {
        ...state,
        loginShow: true,
      };
    case 'hide_login_action':
      return {
        ...state,
        loginShow: false,
      };
    case 'show_register_action':
      return {
        ...state,
        registerShow: true,
      };
    case 'hide_register_action':
      return {
        ...state,
        registerShow: false,
      };
    case 'hide_bottom_sheet_action':
      return {
        ...state,
        resetBottomSheet: true,
      };
    case 'reset_bottom_sheet_action':
      return {
        ...state,
        resetBottomSheet: false,
      };

    case 'initial_bottom_sheet_from':
      return {
        ...state,
        resetInputForm: false,
      };
    case 'reset_bottom_sheet_form':
      return {
        ...state,
        resetInputForm: true,
      };
    case 'navigate_to_profile_screen':
      return {
        ...state,
        navigateToProfile: true,
      };
    case 'reset_profile_screen':
      return {
        ...state,
        navigateToProfile: false,
      };
    case 'increment_sport_watch_time': 
      console.log('incrementing');
      return {
        ...state,
        sportWatchTime: state.sportWatchTime + 1, 
      }
    default:
      return state;
  }
}

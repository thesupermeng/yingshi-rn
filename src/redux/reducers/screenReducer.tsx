export interface screenActionType {
  type: string;
  payload: string;
}

import {screenModel} from '../../types/screenType';

const initialState: screenModel = {
  screenAction: '',
  screenShow: false,
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
        screenShow: true,
        screenAction: action.payload,
      };
    // case 'show_screen_action':
    //   console.log('show_screen_action');
    //   return {
    //     screenShow: true,
    //   };
    default:
      return state;
  }
}

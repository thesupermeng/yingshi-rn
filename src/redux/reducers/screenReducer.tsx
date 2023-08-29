export interface screenActionType {
  type: string;
  payload: screenModel;
}

export interface screenModel {
  screenAction: string;
}

const initialState: screenModel = {
  screenAction: '',
};

export function screenReducer(state = initialState, action: screenActionType) {
  switch (action.type) {
    case 'remove_screen_action':
      return {
        screenAction: '',
      };
    case 'change_screen_action':
      return {
        screenAction: action.payload.screenAction,
      };
    default:
      return state;
  }
}

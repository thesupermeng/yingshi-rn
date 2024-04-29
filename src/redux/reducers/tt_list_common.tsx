import { CombinedState, combineReducers } from 'redux';
import themeReducer from './tt_mbbid';
import {
  vodReducer,
  vodPlaylistReducer,
  vodFavouritesReducer,
} from './tt_configure_injury';
import { miniVodReducer } from './tt_main_placeholder';
import { settingsReducer } from './tt_center';
import { searchHistoryReducer } from './tt_pressure_nalytics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_STORAGE_MEMORY } from '@utility/tt_trophy_cross';
import { userReducer } from './tt_selected';
import { screenReducer } from './tt_styles_whistle';
import { downloadVideoReducer } from './tt_firebase_tail';
import { chatReducer } from './tt_dycreator_reactnativejs';
import { backgroundReducer } from './tt_dialog_rewind';
import { uploadReducer } from './tt_read';

const appReducer = combineReducers({
  themeReducer,
  vodPlaylistReducer,
  vodReducer,
  miniVodReducer,
  searchHistoryReducer,
  vodFavouritesReducer,
  settingsReducer,
  userReducer,
  screenReducer,
  downloadVideoReducer,
  chatReducer,
  backgroundReducer,
  uploadReducer,
});

export default (state: any, action: any) => {
  if (action.type === CLEAR_STORAGE_MEMORY) {
    
    const { screenReducer, userReducer } = state;

    
    state = {
      screenReducer,
      userReducer,
    };

    
    AsyncStorage.removeItem('persist:root');
  }
  return appReducer(state, action);
};

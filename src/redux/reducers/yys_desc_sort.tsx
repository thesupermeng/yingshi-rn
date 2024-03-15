import { CombinedState, combineReducers } from 'redux';
import themeReducer from './yys_vignette_reward';
import {
  vodReducer,
  vodPlaylistReducer,
  vodFavouritesReducer,
} from './yys_full';
import { miniVodReducer } from './yys_leakchecker_textlayoutmanager';
import { settingsReducer } from './yys_libavdevice';
import { searchHistoryReducer } from './yys_back_signinup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_STORAGE_MEMORY } from '@utility/yys_ajax_switch';
import { userReducer } from './yys_privacy_round';
import { screenReducer } from './yys_confirmation_scheduler';
import { downloadVideoReducer } from './yys_minimize_with';
import { chatReducer } from './yys_bell_gdtadv';
import { backgroundReducer } from './yys_animation_animations';
import { uploadReducer } from './uploadReducer';

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

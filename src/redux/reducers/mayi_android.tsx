import { CombinedState, combineReducers } from 'redux';
import themeReducer from './mayi_mintegral_next';
import {
  vodReducer,
  vodPlaylistReducer,
  vodFavouritesReducer,
} from './mayi_temp_holder';
import { miniVodReducer } from './mayi_main_subin';
import { settingsReducer } from './mayi_libavcodec_nativeex';
import { searchHistoryReducer } from './mayi_configure';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_STORAGE_MEMORY } from '@utility/mayi_middleware_apps';
import { userReducer } from './mayi_chatroombackground_unlock';
import { screenReducer } from './mayi_time';
import { downloadVideoReducer } from './mayi_libjsinspector_round';
import { chatReducer } from './mayi_yellow_gemfile';
import { backgroundReducer } from './mayi_imagenomoredata';
import { uploadReducer } from './mayi_malaysia_mbsplash';

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

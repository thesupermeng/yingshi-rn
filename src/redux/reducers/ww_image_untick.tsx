import { CombinedState, combineReducers } from 'redux';
import themeReducer from './ww_weibo';
import {
  vodReducer,
  vodPlaylistReducer,
  vodFavouritesReducer,
} from './ww_shared';
import { miniVodReducer } from './ww_nalytics_subbasketballplayer';
import { settingsReducer } from './ww_detail_mbsplash';
import { searchHistoryReducer } from './ww_wind_yellowvideolive';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_STORAGE_MEMORY } from '@utility/ww_icon';
import { userReducer } from './ww_related_kuaishou';
import { screenReducer } from './ww_sigmob';
import { downloadVideoReducer } from './ww_champion';
import { chatReducer } from './ww_mbbanner';
import { backgroundReducer } from './ww_gray';
import { uploadReducer } from './ww_placeholder';

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

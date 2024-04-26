import { CombinedState, combineReducers } from 'redux';
import themeReducer from './wawa_ying';
import {
  vodReducer,
  vodPlaylistReducer,
  vodFavouritesReducer,
} from './wawa_quest_ping';
import { miniVodReducer } from './wawa_iconarrowrightwhite';
import { settingsReducer } from './wawa_comment';
import { searchHistoryReducer } from './wawa_source_bell';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_STORAGE_MEMORY } from '@utility/wawa_iconpointscore';
import { userReducer } from './wawa_umeng';
import { screenReducer } from './wawa_iconclosewhite';
import { downloadVideoReducer } from './wawa_runtime_neon';
import { chatReducer } from './wawa_fast_flipper';
import { backgroundReducer } from './wawa_sharewhite';
import { uploadReducer } from './wawa_connection_textlayoutmanager';

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

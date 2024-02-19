import { CombinedState, combineReducers } from 'redux';
import themeReducer from './yys_libapminsightb';
import {
  vodReducer,
  vodPlaylistReducer,
  vodFavouritesReducer,
} from './yys_fullscreenmax';
import { miniVodReducer } from './yys_string';
import { settingsReducer } from './yys_tumbnail';
import { searchHistoryReducer } from './yys_selected';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_STORAGE_MEMORY } from '@utility';
import { userReducer } from './yys_code_iconbell';
import { screenReducer } from './yys_shirt';
import { downloadVideoReducer } from './yys_libswscale_orangeuparrow';
import { chatReducer } from './yys_gpay';
import { backgroundReducer } from './yys_largesound_thailand';
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

import { CombinedState, combineReducers } from 'redux';
import themeReducer from './fo_target_banner';
import {
  vodReducer,
  vodPlaylistReducer,
  vodFavouritesReducer,
} from './pxk_lang_quest';
import { miniVodReducer } from './tyk_trophy';
import { settingsReducer } from './t_types';
import { searchHistoryReducer } from './q_favicon_dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_STORAGE_MEMORY } from '@utility/n_subs_interstitial';
import { userReducer } from './f_gmail';
import { screenReducer } from './r_minimize_chart';
import { downloadVideoReducer } from './pfh_launch_left';
import { chatReducer } from './t_filled';
import { backgroundReducer } from './hm_favorite';
import { uploadReducer } from './q_report_favorite';

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

import { CombinedState, combineReducers } from 'redux';
import themeReducer from './themeReducer';
import {
  vodReducer,
  vodPlaylistReducer,
  vodFavouritesReducer,
} from './vodReducer';
import { miniVodReducer } from './miniVodReducer';
import { settingsReducer } from './settingsReducer';
import { searchHistoryReducer } from './searchReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_STORAGE_MEMORY } from '@utility';
import { userReducer } from './userReducer';
import { screenReducer } from './screenReducer';
import { downloadVideoReducer } from './videoDownloadReducer';
import { chatReducer } from './chatReducer';
import { backgroundReducer } from './backgroundReducer';
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
    // Define the reducers you want to keep in the new state
    const { screenReducer, userReducer } = state;

    // Create a new state object with only the desired reducers
    state = {
      screenReducer,
      userReducer,
    };

    // Remove the data from AsyncStorage
    AsyncStorage.removeItem('persist:root');
  }
  return appReducer(state, action);
};

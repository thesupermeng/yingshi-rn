import {CombinedState, combineReducers} from 'redux';
import themeReducer from './themeReducer';
import {
  vodReducer,
  vodPlaylistReducer,
  vodFavouritesReducer,
} from './vodReducer';
import {miniVodReducer} from './miniVodReducer';
import {settingsReducer} from './settingsReducer';
import {searchHistoryReducer} from './searchReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CLEAR_STORAGE_MEMORY} from '../../utility/constants';
import {userReducer} from './userReducer';

const appReducer = combineReducers({
  themeReducer,
  vodPlaylistReducer,
  vodReducer,
  miniVodReducer,
  searchHistoryReducer,
  vodFavouritesReducer,
  settingsReducer,
  userReducer,
});

export default (state: any, action: any) => {
  if (action.type === CLEAR_STORAGE_MEMORY) {
    AsyncStorage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

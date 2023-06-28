import { combineReducers } from "redux";
import themeReducer from './themeReducer';
import { vodReducer, vodPlaylistReducer } from './vodReducer';
import { searchHistoryReducer } from './searchReducer';
import { settingsReducer } from '../reducers/settingsReducer';

export default combineReducers({
    themeReducer,
    vodPlaylistReducer,
    vodReducer,
    searchHistoryReducer,
    settingsReducer,
})
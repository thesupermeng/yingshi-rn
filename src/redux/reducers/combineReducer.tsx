import { combineReducers } from "redux";
import themeReducer from './themeReducer';
import { vodReducer, vodPlaylistReducer } from './vodReducer';
export default combineReducers({
    themeReducer,
    vodPlaylistReducer,
    vodReducer,
})
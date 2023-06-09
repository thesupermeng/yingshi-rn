import { combineReducers } from "redux";
import themeReducer from './themeReducer';
import {vodReducer, playVodReducer} from './vodReducer';
export default combineReducers({
    themeReducer,
    vodReducer,
    playVodReducer
})
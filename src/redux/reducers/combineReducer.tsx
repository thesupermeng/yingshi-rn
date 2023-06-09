import { combineReducers } from "redux";
import themeReducer from './themeReducer';
import { vodReducer } from './vodReducer';
export default combineReducers({
    themeReducer,
    vodReducer,
})
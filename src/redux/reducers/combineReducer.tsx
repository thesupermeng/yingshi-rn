import { CombinedState, combineReducers } from "redux";
import themeReducer from './themeReducer';
import { vodReducer, vodPlaylistReducer } from './vodReducer';
import { searchHistoryReducer } from './searchReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLEAR_STORAGE_MEMORY } from "../../constants";

const appReducer = combineReducers({
    themeReducer,
    vodPlaylistReducer,
    vodReducer,
    searchHistoryReducer
})

export default (state: any, action: any) => {
    if (action.type === CLEAR_STORAGE_MEMORY) {
        AsyncStorage.removeItem('persist:root')
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

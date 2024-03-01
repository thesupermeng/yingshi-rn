import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/yys_desc_sort';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

var middlewares = applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, middlewares);
export const persistor = persistStore(store)

export type yys_FootballBackground = typeof store.dispatch;
export type yys_MintegralLibavdevice = ReturnType<typeof rootReducer>
export default () => {
    return { store, persistor }
}
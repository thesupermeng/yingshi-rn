import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/ww_image_untick';
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

export type wwAdultVolume = typeof store.dispatch;
export type wwEighteenShirt = ReturnType<typeof rootReducer>
export default () => {
    return { store, persistor }
}
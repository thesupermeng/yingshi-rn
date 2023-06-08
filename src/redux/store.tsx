import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/combineReducer';
import thunk from "redux-thunk";
var middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);
export type AppDispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>
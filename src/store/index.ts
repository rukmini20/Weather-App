import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import expireIn from "redux-persist-transform-expire-in"
import thunk from 'redux-thunk'
import rootReducer from './reducer'
declare global {  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const expireInTime = 10*60*1000
const expirationKey = "expirationKey"
const persistConfig = {
  key: 'root',
  storage,
  transforms: [expireIn(expireInTime, expirationKey, [])]
}
const persistedReducer  = persistReducer(persistConfig, rootReducer)   
const store:any=createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const persistor=persistStore(store)
export {store, persistor}

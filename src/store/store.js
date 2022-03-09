import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { cartReducer } from '../reducers/cartReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
   auth: authReducer,
   ui: uiReducer, 
   cart: cartReducer,
});



export const store = createStore(
   reducers,
   composeEnhancers(
      applyMiddleware(thunk) //Permite la manipulacion de acciones asincronas
   )
);
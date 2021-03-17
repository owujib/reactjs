import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initaialState = {};

const store = createStore(
  rootReducer,
  initaialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';

import userReducer from 'store/reducers/user';
import tasksReducer from 'store/reducers/tasks';

const reducers = {
  user: userReducer,
  tasks: tasksReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const additionalMiddlewares = process.env.NODE_ENV === 'production' ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  combinedReducers,
  initialState,
  additionalMiddlewares,
);

export default store;
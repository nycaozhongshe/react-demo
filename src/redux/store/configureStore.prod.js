import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-logger'; //中间日志

import promiseMiddleware from 'redux-promise-middleware'; //中间日志

import state from '../state'

const configureStore = (preloadState) => {
  const store = createStore(state, preloadState, applyMiddleware(thunk, promiseMiddleware()))

  return store
}
export default configureStore
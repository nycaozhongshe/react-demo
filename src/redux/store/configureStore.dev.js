/*
 * @Author: caozhongshe 
 * @Date: 2018-09-02 14:02:23 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-03 22:45:50
 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //中间日志

import thunk from 'redux-logger'; //中间日志

import promiseMiddleware from 'redux-promise-middleware'; //中间日志
import state from '../state'

import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});


const configureStore = (preloadState) => {
  const store = createStore(
    state,
    preloadState,
    composeEnhancers(applyMiddleware(
      logger,
      thunk,
      promiseMiddleware()
    )))

  if (module.hot) {
    module.hot.accept('../state', () => {
      store.replaceReducer(state)
    })
  }

  return store
}

export default configureStore

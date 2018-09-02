import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //中间日志

import thunk from 'redux-logger'; //中间日志

import promiseMiddleware from 'redux-promise-middleware'; //中间日志

import state from '../state'

const store = createStore(state, {}, applyMiddleware(thunk,promiseMiddleware()))

export default store
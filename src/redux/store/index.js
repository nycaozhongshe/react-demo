/*
 * @Author: caozhongshe 
 * @Date: 2018-09-02 14:02:23 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-03 15:24:35
 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //中间日志

import thunk from 'redux-logger'; //中间日志

import promiseMiddleware from 'redux-promise-middleware'; //中间日志

import state from '../state'

const store = createStore(state, {}, applyMiddleware(logger,thunk,promiseMiddleware()))

export default store
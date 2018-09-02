/*
 * @Author: caozhongshe 
 * @Date: 2018-09-02 14:02:23 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 17:33:06
 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //中间日志
import state from '../state'

const store = createStore(state, {}, applyMiddleware(logger))

export default store
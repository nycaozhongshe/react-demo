/*
 * @Author: caozhongshe 
 * @Date: 2018-09-02 14:02:23 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 17:28:57
 */

import { createStore, applyMiddleware } from 'redux';

import state from '../state'

const store = createStore(state, {}, applyMiddleware())

export default store
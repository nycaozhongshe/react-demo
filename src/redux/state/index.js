/*
 * @Author: caozhongshe 
 * @Date: 2018-09-02 14:02:27 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 16:47:40
 */
import { getReduxer } from '../../utils/getReduxer'
import { combineReducers } from 'redux'


const state = getReduxer()


export default combineReducers(state)
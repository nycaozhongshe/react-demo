/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:15 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-08-31 22:06:22
 */

import { createStore } from 'redux'


export default function () {
    function counter(state = 0, action) {
        switch (action.type) {
            case 'plus':
                return state + 1
            case 'min':
                return state + 1
            default:
                return state
        }
    }
}

let store = createStore(counter)

store.subscribe(()=>{
    console.log(11111)
})

store.dispatch({})
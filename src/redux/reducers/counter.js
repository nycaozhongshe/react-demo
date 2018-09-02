/*
 * @Author: caozhongshe 
 * @Date: 2018-09-02 14:02:04 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 17:01:43
 */


export default function counter(state = 1, action = {}) {
  switch (action.type) {
    case 'plus':
      return state + 1
    case 'min':
      return state <= 0 ? 0 : state -1
    default:
      return state;
  }
}
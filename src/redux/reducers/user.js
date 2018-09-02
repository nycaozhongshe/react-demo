/*
 * @Author: caozhongshe 
 * @Date: 2018-09-02 16:25:48 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 16:31:21
 */



export default function user(state = 1, action = {}) {
  switch (action.type) {

    case 'plus':
      return state + 1

    case 'min':
      return state <= 0 ? 0 : state + 1

    default:
      return state;
  }
}
/*
 * @Author: caozhongshe 
 * @Date: 2018-09-02 14:01:46 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 15:22:55
 */
export const plus = (id) => {
  return {
    type: 'plus',
    id
  }
}

export const min = (id) => {
  return {
    type: 'min',
    id
  }
}

/*
 * @Author: caozhongshe 
 * @Date: 2018-09-02 14:03:44 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 15:19:21
 */


const getChunks = modulesContext => {
  const chunks = modulesContext.keys().reduce((modules, key) => {
    modules[key.replace(/(^\.\/)|(\.js$)/g, '')] = modulesContext(key).default;
    return modules;
  }, {});
  return chunks;
};

export const getReduxer = path => {
  const modules = require.context('../redux/reducers', true, /\.js$/);
  return getChunks(modules)
}
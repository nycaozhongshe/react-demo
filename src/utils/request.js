import axios from 'axios';
import { message as Message } from 'antd';
// 创建axios实例
const service = axios.create({
  timeout: 10000, // 请求超时时间
});

let interceptor = response => true;



// request拦截器
service.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = { 'Content-Type': 'application/json' };
    Object.assign(config.headers, {
      token: sessionStorage.getItem('token') || null,
    });
    Object.assign(config.headers, {
      userId: sessionStorage.getItem('userId') || null,
    });
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// respone拦截器
service.interceptors.response.use(
  response => {
    if (interceptor(response)) {
      return response.data.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    console.log('err' + error); // for debug
    if (error === 'Cancel') {
      error = {
        message: '重复提交',
      };
    }
    Message.error(
      error.message || error || '服务器错误'
    );
    return Promise.reject(error);
  },
);

export default service;

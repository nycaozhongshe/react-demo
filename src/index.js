import React from 'react';
import ReactDOM from 'react-dom';
import '@/style/index.scss';
import registerServiceWorker from '@/registerServiceWorker';
import store from '@/redux/store'
import { Provider } from 'react-redux'
import Router from '@/router/index.jsx'
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

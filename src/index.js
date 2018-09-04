import React from 'react';
import ReactDOM from 'react-dom';
import '@/style/index.scss';
import registerServiceWorker from '@/registerServiceWorker';
import configureStore from '@/redux/store/configureStore';
import { Provider } from 'react-redux';
import Router from '@/router/index.jsx';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('@/router/index.jsx', () => {
    ReactDOM.render(
      <Provider store={store}>
        <Router />
      </Provider>,
      document.getElementById('root'),
    )
  })
}
registerServiceWorker();

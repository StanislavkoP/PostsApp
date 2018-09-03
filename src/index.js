import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


axios.interceptors.response.use(function (response) {
    return response;
  }, error => {
    return Promise.reject(error);
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

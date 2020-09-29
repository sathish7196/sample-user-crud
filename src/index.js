import React from 'react';
import ReactDOM from 'react-dom';
import { toast, Slide } from 'react-toastify';
import './index.css';
import Users from './containers/Users';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/Users.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css';


toast.configure({
  autoClose: 2000,
  hideProgressBar: true,
  pauseOnHover: false,
  transition: Slide,
  toastClassName: 'toast-container',
  bodyClassName: 'toast-body',
});

ReactDOM.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

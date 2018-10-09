import React from 'react';
import ReactDOM from 'react-dom';
// import {
//   Route,
//   Switch,
//   Redirect,
//   BrowserRouter as Router,
// } from 'react-router-dom';

// examples:
// styles
import './index.css';

// components
import App from './App';

// utils
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App>
    </App>,
  document.getElementById('root'),
);

registerServiceWorker();

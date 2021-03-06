import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from './store/index.js';
import { Provider } from 'react-redux';
// Connect store to react application
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
// import { Todo } from './pages/todo';
import registerServiceWorker from './registerServiceWorker';

render(
  <App />, 
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

const store = createStore(reducer, composeWithDevTools(middleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react'
import Login from './components/Login'
import {createStore} from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import {Provider} from 'react-redux'

const store = createStore(reducer, middleware)

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;

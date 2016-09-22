import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AsyncApp from './containers/AsyncApp'
import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AsyncApp />
  </Provider>,
  document.getElementById('root')
);

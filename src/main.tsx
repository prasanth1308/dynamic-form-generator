/**
 * Project: Dynamic Form Generator
 * File: main.tsx
 * Description: Entry point for the React application.
 * Author: Prasanth Ravi
 * Created On: January 24, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This file initializes and renders the React application.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import 'antd/dist/reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

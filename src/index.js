import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store/index';
import { Provider } from "react-redux";
import './styles/normalize.css';
import './styles/style.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Inventory } from './store/Inventory'

let store = new Inventory()
console.log(store)
ReactDOM.render(<App store={store}/>, document.getElementById('root'));
reportWebVitals();

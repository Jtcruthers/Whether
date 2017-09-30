import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import whether from './reducers'
import './css/index.css';

let store = createStore(whether);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

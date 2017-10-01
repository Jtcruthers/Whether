import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './containers/App';
import whether from './reducers'

let store = createStore(whether);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

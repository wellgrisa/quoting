/* global __DEVTOOLS__ */
import React from 'react';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { App, Login, Home } from './containers';
import rootReducer from './reducers';

const store = createStore(rootReducer);
const history = createHistory();

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={Home} />
      </Route>
    </Router>
  </Provider>
);

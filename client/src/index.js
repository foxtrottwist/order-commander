import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './components/App';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

// instead of passing a generic state object ({}) as the second argument of createStore,
// we are passing state loaded from the user's localStorage
const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(reduxThunk)
);

// this saves only the authenticated property of the application state
store.subscribe(() =>
  saveState({
    authenticated: store.getState().authenticated
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

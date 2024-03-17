import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import myFirstReducer, { userReducer } from './reducer';
import mySaga from './sagas';
import thunk from 'redux-thunk';

// saga
const sagaMiddleware = createSagaMiddleware();
const rootRuducer = combineReducers({ myFirstReducer, userReducer })
const store = legacy_createStore(rootRuducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

// // thunk
// const rootRuducer = combineReducers({ myFirstReducer, userReducer })
// const store = legacy_createStore(rootRuducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


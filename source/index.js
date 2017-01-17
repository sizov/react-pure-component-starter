import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {render} from 'react-dom';
import React from 'react'
import {Provider} from 'react-redux'

import CounterOfCountersContainer from 'components/containers/CounterOfCountersContainer';
import CounterContainer from 'components/containers/CounterContainer';
import FooContainer from 'components/containers/FooContainer';
import BarContainer from 'components/containers/BarContainer';
import rootReducer from 'store/reducers/rootReducer';

import observerExample from './manualObservebleMap';
import manualObservableCombine from './manualObservableCombine';
manualObservableCombine();

const root = document.getElementById('root');
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    logger
  )
);

render(
  <Provider store={store}>
    <div>
      <CounterOfCountersContainer/>
      <CounterContainer/>
      <FooContainer/>
      <BarContainer/>
    </div>
  </Provider>,
  root
);

//TODO: big question: what is reusable COMPONENT??? is it view&reducer? is it redux container?
//TODO: solve all appCounter examples from article "solving redux problems in 150 loc"
//TODO: solve server-side network requests http://redux.js.org/docs/advanced/

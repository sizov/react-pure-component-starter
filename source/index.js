import 'rxjs'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import createLogger from 'redux-logger';
import {render} from 'react-dom';
import React from 'react'
import {Provider} from 'react-redux'

import CounterOfCountersContainer from 'components/containers/CounterOfCountersContainer';
import CounterContainer from 'components/containers/CounterContainer';
import FooContainer from 'components/containers/FooContainer';
import BarContainer from 'components/containers/BarContainer';
import rootReducer from 'store/reducers/rootReducer';

//FIXME: it is really bad that we have to add epic on top level, need in component
import {toggleUntoggleEpic} from 'components/containers/bar/barReduxObservableEpics';
// const rootEpic = combineEpics(toggleUntoggleEpic);
const epicMiddleware = createEpicMiddleware(toggleUntoggleEpic);

const root = document.getElementById('root');
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    logger,
    epicMiddleware
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


//TODO: remove this, this is just an observable playground
import observerExample from './manualObservebleMap';
import manualObservableCombine from './manualObservableCombine';
manualObservableCombine();

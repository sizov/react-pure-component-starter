import CounterContainer from 'components/container/counter';
import {createStore} from 'redux';
import {render} from 'react-dom';
import React from 'react'
import {Provider} from 'react-redux'

import hello from 'store/reducers/hello';

const root = document.getElementById('root');

const store = createStore(hello);

render(
  <Provider store={store}>
    <CounterContainer/>
  </Provider>,
  root
);

//TODO: write encapsulation example
//TODO: solve all counter examples from article - solving
// redux problems in 150 loc
//TODO: solve server-side network requests http://redux.js.org/docs/advanced/

import {createStore} from 'redux';
import {render} from 'react-dom';
import React from 'react'
import {Provider} from 'react-redux'

import CounterContainer from 'containers/CounterContainer';
import FooContainer from 'containers/FooContainer';
import BarContainer from 'containers/BarContainer';
import rootReducer from 'store/reducers/rootReducer';

const root = document.getElementById('root');

const store = createStore(rootReducer);
store.subscribe(function () {
  console.log(store.getState());
});

//TODO: big question: what is reusable COMPONENT??? is it view&reducer? is it redux container?

render(
  <Provider store={store}>
    <div>
      {/*<CounterContainer/>*/}
      <FooContainer/>
      <BarContainer/>
    </div>
  </Provider>,
  root
);

//TODO: write encapsulation example
//TODO: solve all counter examples from article "solving redux problems in 150 loc"
//TODO: solve server-side network requests http://redux.js.org/docs/advanced/

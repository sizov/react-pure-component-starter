import Counter from 'components/counter';
import {createStore} from 'redux';
import {render} from 'react-dom';
import React from 'react'


import hello from 'store/reducers/hello';

const root = document.getElementById('root');

const store = createStore(hello);

const incrementCounter = () => store.dispatch({type: 'INCREMENT_COUNTER'});

function reRender() {
  console.log(store.getState());

  render(
    <Counter
      counter={store.getState().counter}
      increment={() => incrementCounter()}/>,
    root
  );
}

store.subscribe(reRender);
reRender();

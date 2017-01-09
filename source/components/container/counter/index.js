import Counter from 'components/presentational/counter';
import React from 'react';

const incrementCounter = (store) => store.dispatch({type: 'INCREMENT_COUNTER'});

export default (props) => {

  return <Counter
    counter={props.store.getState().counter}
    increment={() => incrementCounter(props.store)}/>

};

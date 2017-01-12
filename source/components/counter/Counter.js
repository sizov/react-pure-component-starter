import React from 'react';
import {connect} from 'react-redux';

import {getIncrementAction} from './actionCreators'

const Counter = (props) => (
  <div style={{margin: '0 auto'}}>
    <button onClick={() => props.dispatch(getIncrementAction())}>
      Increment
    </button>
    <span>Counter: {props.counter}</span>
  </div>
);

export default connect()(Counter);

import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => (
  <div style={{margin: '0 auto'}}>
    <button onClick={() => props.increment()}>
      Increment
    </button>
    <span>Counter: {props.counter}</span>
  </div>
);

export default connect()(Counter);

import React from 'react'

export default (props) => (

  <div style={{margin: '0 auto'}}>
    <button onClick={props.increment}>
      Increment
    </button>
    <span>Counter: {props.counter}</span>
  </div>

);

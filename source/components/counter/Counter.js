import React from 'react'

export default (props) => (

  <div style={{margin: '0 auto'}}>
    <h2>Counter: {props.counter}</h2>
    <button onClick={props.increment}>
      Increment
    </button>
  </div>

);

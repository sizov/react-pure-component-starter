import React from 'react'

export default (props) => (

  <div style={{padding: '5px', margin: '0 auto', border: 'solid'}}>
    <button onClick={props.toggle}>
      Toggle Foo
    </button>
    <span>Foo is: {props.enabled ? 'enabled' : 'disabled'}</span>
  </div>

);

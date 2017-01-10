import React from 'react'

export default (props) => {

  return <div style={{padding: '5px', margin: '0 auto', border: 'solid'}}>
    <button onClick={props.toggle}>
      Toggle Bar
    </button>
    <span>Bar is: {props.enabled ? 'enabled' : 'disabled'}</span>
  </div>

};

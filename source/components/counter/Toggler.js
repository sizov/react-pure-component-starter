import React from 'react'

export default (props) => {

  return <div>
    <button onClick={props.toggle}>
      Toggle Bar
    </button>
    <span>Bar is: {props.enabled ? 'enabled' : 'disabled'}</span>
  </div>

};

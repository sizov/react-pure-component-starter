import React from 'react'

export default (props) => {

  return <div>
    <span>{props.name}:</span>
    <button onClick={props.toggle}>
      Toggle
    </button>
    <button onClick={props.toggleUntoggle}>
      ToggleUntogllge
    </button>
    <span>{props.name} is: {props.enabled ? 'enabled' : 'disabled'}</span>
  </div>

};

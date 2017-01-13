import React from 'react'

export default (props) => {

  return <div>
    <button onClick={props.toggle}>
      Toggle {props.name}
    </button>
    <span>{props.name} is: {props.enabled ? 'enabled' : 'disabled'}</span>
  </div>

};

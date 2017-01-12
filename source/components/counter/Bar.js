import React from 'react';
import Toggler from './Toggler';

export default (props) => {
//TODO: This style VS redux connect: redux connect has access to the whole state
//TODO: which is really bad for encapsulation reasons.
//TODO: in this way we can pass downstream nested properties wihtout having to know
//TODO: where it is located in the WHOLE state

 return <div style={{padding: '5px', margin: '0 auto', border: 'solid'}}>
    <Toggler />
  </div>

};

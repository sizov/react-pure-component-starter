import React from 'react';
import {connect} from 'react-redux';

import Toggler from '../../presentational/toggler/Toggler';
import {getToggleFooAction} from './actionCreators';

const Bar = (props) => (
  <div style={{padding: '5px', margin: '0 auto', border: 'solid'}}>
    <Toggler
      name="Foo"
      enabled={props.enabled}
      toggle={() => props.dispatch(getToggleFooAction())}/>
  </div>
);

export default connect()(Bar)

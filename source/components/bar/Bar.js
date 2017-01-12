import React from 'react';
import {connect} from 'react-redux';

import Toggler from '../toggler/Toggler';
import {getToggleBarAction} from './actionCreators';

const Bar = (props) => (
  <div style={{padding: '5px', margin: '0 auto', border: 'solid'}}>
    <Toggler
      name="Barrr"
      enabled={props.enabled}
      toggle={() => props.dispatch(getToggleBarAction())}/>
  </div>
);

export default connect()(Bar)

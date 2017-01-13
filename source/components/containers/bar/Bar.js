import React from 'react';
import {connect} from 'react-redux';

import Toggler from '../../presentational/toggler/Toggler';
import BarCounter from '../bar-counter/BarCounter';
import {getToggleBarAction} from './actionCreators';

const Bar = (props) => (
  <div style={{padding: '5px', margin: '0 auto', border: 'solid'}}>
    <Toggler
      name="Barrr"
      enabled={props.enabled}
      toggle={() => props.dispatch(getToggleBarAction())}/>
    <BarCounter
      counter={props.counter}/>
  </div>
);

export default connect()(Bar);

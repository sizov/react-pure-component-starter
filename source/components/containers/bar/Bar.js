import React from 'react';
import {connect} from 'react-redux';

import Toggler from '../../presentational/toggler/Toggler';
import BarCounter from '../barCounter/BarCounter';
import {getToggleBarAction} from './actionCreators';

const Bar = ({enabled, dispatch, counter}) => (
  <div style={{padding: '5px', margin: '0 auto', border: 'solid'}}>
    <Toggler
      name="Barrr"
      enabled={enabled}
      toggle={() => dispatch(getToggleBarAction())}/>
    <BarCounter
      counter={counter}/>
  </div>
);

export default connect()(Bar);

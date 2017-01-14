import React from 'react';
import {connect} from 'react-redux';

import Toggler from '../../presentational/toggler/Toggler';
import {getToggleFooAction} from './actionCreators';

const Foo = ({enabled, dispatch}) => (
  <div style={{padding: '5px', margin: '0 auto', border: 'solid'}}>
    <Toggler
      name="Foo"
      enabled={enabled}
      toggle={() => dispatch(getToggleFooAction())}/>
  </div>
);

export default connect()(Foo);

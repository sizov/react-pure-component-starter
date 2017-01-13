import React from 'react';
import {connect} from 'react-redux';

import Counter from '../../presentational/counter/Counter';
import {getIncrementAction} from './actionCreators'

const AppCounter = (props) => (
  <Counter
    counter={props.counter}
    increment={() => props.dispatch(getIncrementAction())}/>
);

export default connect()(AppCounter);

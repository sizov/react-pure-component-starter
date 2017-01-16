import React from 'react';
import {connect} from 'react-redux';

import Counter from '../../presentational/counter/Counter';
import {getIncrementAction} from './actionCreators'

const BarCounter = ({counter, dispatch}) => (
  <Counter
    counter={counter}
    increment={() => dispatch(getIncrementAction())}/>
);

export default connect()(BarCounter);

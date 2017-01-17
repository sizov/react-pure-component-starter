import React from 'react';
import {connect} from 'react-redux';

import Counter from '../../presentational/counter/Counter';
import {getIncrementAction} from './actionCreators'
import {getIncrementAsyncAction} from './actionCreators'

const AppCounter = ({counter, dispatch}) => (
  <Counter
    counter={counter}
    increment={() => dispatch(getIncrementAction())}
    incrementAsync={() => dispatch(getIncrementAsyncAction())}/>
);

export default connect()(AppCounter);

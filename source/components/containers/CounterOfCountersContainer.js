import React from 'react';
import {connect} from 'react-redux';

import CounterOfCounters from './counterOfCounters/CounterOfCounters';

const mapStateToProps = (state) => ({
  amount: state.counterOfCounters
});

export default connect(
  mapStateToProps
)(CounterOfCounters)

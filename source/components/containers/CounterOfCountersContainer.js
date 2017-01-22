import React from 'react';
import { connect } from 'react-redux';

import { CounterOfCounters, counterOfCountersStateSelector } from './counterOfCounters';

const mapStateToProps = (state) => ({
  amount: counterOfCountersStateSelector(state)
});

export default connect(
  mapStateToProps
)(CounterOfCounters)

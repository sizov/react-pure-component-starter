import React from 'react';
import { connect } from 'react-redux';

import { AppCounter, appCounterStateSelector } from './appCounter';

const mapStateToProps = (state) => ({
  counter: appCounterStateSelector(state)
});

export default connect(
  mapStateToProps
)(AppCounter)


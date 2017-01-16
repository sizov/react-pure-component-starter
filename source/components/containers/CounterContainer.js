import AppCounter from './appCounter/AppCounter';
import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(
  mapStateToProps
)(AppCounter)


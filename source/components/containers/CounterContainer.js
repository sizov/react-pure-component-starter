import AppCounter from './app-counter/AppCounter';
import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(
  mapStateToProps
)(AppCounter)


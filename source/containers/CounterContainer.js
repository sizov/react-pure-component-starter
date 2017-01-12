import Counter from '../components/counter/Counter';
import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(
  mapStateToProps
)(Counter)

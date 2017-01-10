import Counter from 'components/presentational/counter';
import React from 'react';
import {connect} from 'react-redux';

const getIncrementCounterAction = () => ({
  type: 'INCREMENT_COUNTER'
});


const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = function (dispatch) {
  return {
    increment: () => dispatch(getIncrementCounterAction())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

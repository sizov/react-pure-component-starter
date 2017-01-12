import Counter from '../components/counter/Counter';
import React from 'react';
import {connect} from 'react-redux';

const getIncrementCounterAction = () => ({
  type: 'INCREMENT_COUNTER'
});

//fixme move to counter component foldre - i's encapsulated


const mapStateToProps = (state) => ({
  counter: state
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

import Bar from '../components/counter/Bar';
import React from 'react';
import {connect} from 'react-redux';

const getTiggleBarAction = () => ({
  type: 'TOGGLE_BAR'
});

//TODO: This style (redux connect) VS passing props downstream: redux connect has access to the whole state
//TODO: which is really bad for encapsulation reasons.
//TODO: research doing it just by passing required part of the state form store?

//fixme: connect passes all state, not small slice!!
//todo: probably the selector should be used here
const mapStateToProps = (state) => {
  return {
    enabled: state.bar.enabled
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    toggle: () => dispatch(getTiggleBarAction())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar)

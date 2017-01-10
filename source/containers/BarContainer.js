import Bar from '../components/counter/Bar';
import React from 'react';
import {connect} from 'react-redux';

const getTiggleBarAction = () => ({
  type: 'TOGGLE_BAR'
});


const mapStateToProps = (state) => ({
  enabled: state.bar.enabled //TODO: use state slice
});

const mapDispatchToProps = function (dispatch) {
  return {
    toggle: () => dispatch(getTiggleBarAction())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar)

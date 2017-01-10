import Foo from '../components/counter/Foo';
import React from 'react';
import {connect} from 'react-redux';

const getToggleFooAction = () => ({
  type: 'TOGGLE_FOO'
});

const mapStateToProps = (state) => ({
  enabled: state.foo.enabled //TODO: use state slice
});

const mapDispatchToProps = function (dispatch) {
  return {
    toggle: () => dispatch(getToggleFooAction())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Foo)

import Foo from './foo/Foo';
import React from 'react';
import {connect} from 'react-redux';

const getToggleFooAction = () => ({
  type: 'TOGGLE_FOO'
});

//fixme: connect passes all state, not small slice!!
const mapStateToProps = (state) => ({
  enabled: state.foo.enabled
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

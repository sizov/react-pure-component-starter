import React from 'react';
import {connect} from 'react-redux';

import Foo from './foo/Foo';

const mapStateToProps = (state) => ({
  ...state.foo
});

export default connect(
  mapStateToProps
)(Foo)

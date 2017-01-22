import React from 'react';
import { connect } from 'react-redux';

import { Foo, fooStateSelector } from './foo';

const mapStateToProps = (state) => ({
  ...fooStateSelector(state)
});

export default connect(
  mapStateToProps
)(Foo)

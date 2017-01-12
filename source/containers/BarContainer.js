import Bar from '../components/counter/Bar';
import React from 'react';
import {connect} from 'react-redux';

const getTiggleBarAction = () => ({
  type: 'TOGGLE_BAR'
});

//TODO: This style (redux connect) VS passing props downstream: redux connect has access to the whole state
//TODO: which is really bad for encapsulation reasons.
//TODO: research doing it just by passing required part of the state form store?

//TODO: but please keep in mind that container doe more:
//TODO: 1) has ref to .dispatch method to dispatch actions

//fixme: !!!! connect passes all state, not small slice!!
//todo: probably the selector should be used here

//FIXME: idea: 'connect' might receive just 'mapDispatchToProps'
//FIXME: -> so then you can use connect to get a ref to .dispatch but
//FIXME: pass state as a properties to omit componentns
//FIXME: getting access to the WHOLE state, give them just a slice
//FIXME: connect(){MyComponent} will get access to .dispatch in MyCOmponent as a prop
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

import React from 'react';
import Toggler from './Toggler';
import {connect} from 'react-redux';

//TODO: big question: what is reusable COMPONENT??? is it view&reducer? is it redux container?

const getToggleBarAction = () => ({
  type: 'TOGGLE_BAR'
});

const Bar = (props) => {

  return <div style={{padding: '5px', margin: '0 auto', border: 'solid'}}>
    <Toggler
      enabled={props.enabled}
      toggle={() => props.dispatch(getToggleBarAction())}/>
  </div>

};

export default connect()(Bar)


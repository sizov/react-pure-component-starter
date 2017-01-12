import barActions from './barActions';

const assign = Object.assign;

const DEFAULT_BAR_STATE = {
  enabled: false
};

export default (state = DEFAULT_BAR_STATE, {type} = {}) => {

  switch (type) {
    case barActions.TOGGLE_BAR:
      return assign({}, state, {
        enabled: !state.enabled
      });
    default:
      return state;
  }

};

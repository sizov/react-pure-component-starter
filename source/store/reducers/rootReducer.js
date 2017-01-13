import barReducer from '../../components/containers/bar/reducer';
import counterReducer from '../../components/containers/app-counter/reducer';

const assign = Object.assign;

const DEFAULT_FOO_STATE = {
  enabled: true
};

const fooReducer = (state = DEFAULT_FOO_STATE, {type} = {}) => {

  switch (type) {
    case 'TOGGLE_FOO':
      return assign({}, state, {
        enabled: !state.enabled
      });
    default:
      return state;
  }

};

export default (state = {}, action) => {
  return {
    counter: counterReducer(state.counter, action),
    foo: fooReducer(state.foo, action),
    bar: barReducer(state.bar, action)
  };

};


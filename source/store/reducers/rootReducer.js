import barReducer from '../../components/bar/reducer';

const assign = Object.assign;

const DEFAULT_COUNTER_STATE = 7;
const DEFAULT_FOO_STATE = {
  enabled: true
};

const counterReducer = (state = DEFAULT_COUNTER_STATE, {type} = {}) => {

  switch (type) {
    case 'INCREMENT_COUNTER':
      return state + 1;
    default:
      return state;
  }

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


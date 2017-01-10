const assign = Object.assign;

let DEFAULT_STATE = {
  foo: {
    enabled: true
  },
  bar: {
    enabled: false
  },
  counter: 0
};

export default (state = DEFAULT_STATE, {type} = {}) => {

  switch (type) {
    case 'TOGGLE_FOO':
      return assign({}, state, {
        foo: {...state.foo, enabled: !state.foo.enabled}
      });
    case 'TOGGLE_BAR':
      return assign({}, state, {
        bar: {...state.bar, enabled: !state.bar.enabled}
      });
    case 'INCREMENT_COUNTER':
      return assign({}, state, {
        counter: state.counter + 1
      });
    default:
      return state;
  }

};

const assign = Object.assign;

let DEFAULT_STATE = {
  counter: 0
};

export default (state = DEFAULT_STATE, {type} = {}) => {

  switch (type) {
    case 'INCREMENT_COUNTER':
      return assign({}, state, {
        counter: state.counter + 1
      });
    default:
      return state;
  }

};

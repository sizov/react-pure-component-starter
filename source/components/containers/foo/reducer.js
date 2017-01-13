import actions from './actions';
import DEFAULT_STATE from './defaultState';

const toggleFooReduce = (state) => (
  {
    ...state,
    enabled: !state.enabled
  }
);

//TODO: reducer for toggler should be reused
const reduceMap = {
  [actions.TOGGLE_FOO]: toggleFooReduce,
};

export default (state = DEFAULT_STATE, {type} = {}) => {
  let reduceFn = reduceMap[type];
  if (!reduceFn) {
    return state;
  }

  return reduceFn(state);
};

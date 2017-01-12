import actions from './actions';
import DEFAULT_STATE from './defaultState';

const toggleBarReduce = (state) => (
  Object.assign({}, state, {
    enabled: !state.enabled
  })
);

const reduceMap = {
  [actions.TOGGLE_BAR]: toggleBarReduce
};

export default (state = DEFAULT_STATE, {type} = {}) => {
  const reduce = reduceMap[type];
  return reduce ? reduce(state) : state;
};

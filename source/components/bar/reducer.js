import barActions from './actions';
import DEFAULT_BAR_STATE from './defaultState';

const toggleBarReduce = (state) => (
  Object.assign({}, state, {
    enabled: !state.enabled
  })
);

const reduceMap = {
  [barActions.TOGGLE_BAR]: toggleBarReduce
};

export default (state = DEFAULT_BAR_STATE, {type} = {}) => {
  const reduce = reduceMap[type];
  return reduce ? reduce(state) : state;
};

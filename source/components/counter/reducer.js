import actions from './actions';
import DEFAULT_STATE from './defaultState';

const incrementBarReduce = (state) => (
  state + 1
);

const reduceMap = {
  [actions.INCREMENT]: incrementBarReduce
};

export default (state = DEFAULT_STATE, {type} = {}) => {
  const reduce = reduceMap[type];
  return reduce ? reduce(state) : state;
};

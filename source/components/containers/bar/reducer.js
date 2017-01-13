import actions from './actions';
import DEFAULT_STATE from './defaultState';
import barCounterReducer from '../bar-counter/reducer';

const toggleBarReduce = (state) => (
  {
    ...state,
    enabled: !state.enabled
  }
);

const reduceMap = {
  [actions.TOGGLE_BAR]: toggleBarReduce,
};

export default (state = DEFAULT_STATE, {type} = {}) => {
  const reduce = reduceMap[type];

  if (reduce) {
    return {
      ...reduce(state, type),
      counter: barCounterReducer(state.counter, {type})
    };
  }

  return {
    ...state,
    counter: barCounterReducer(state.counter, {type})
  };
};

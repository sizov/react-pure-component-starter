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
  let reduceFn = reduceMap[type];
  const reducedState = reduceFn ? reduceFn(state, type) : state;

  return {
    ...reducedState,
    counter: barCounterReducer(state.counter, {type})
  };
};

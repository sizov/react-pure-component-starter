import actions from './actions';
import DEFAULT_STATE from './defaultState';
import {barCounterIncrementReduce} from '../bar-counter/reducer';
import barCounterReducer from '../bar-counter/reducer';

const toggleBarReduce = (state) => (
  {
    ...state,
    enabled: !state.enabled
  }
);

const barReduceMap = {
  [actions.TOGGLE_BAR]: toggleBarReduce,
};

export const barCounterOnlyIncrementReduce = (state) => (
  {
    ...state,
    counter: barCounterIncrementReduce(state.counter)
  }
);

export default (state = DEFAULT_STATE, {type} = {}) => {
  const barReduceFn = barReduceMap[type];
  if (barReduceFn) {
    return Object.assign({}, state, barReduceFn(state));
  }

  return {
    ...state,
    counter: barCounterReducer(state.counter, {type})
  };
};

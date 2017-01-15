import actions from './actions';
import DEFAULT_STATE from './defaultState';
import {barCounterIncrementReduce} from '../bar-counter/reducer';
import {toggle} from '../../presentational/toggler/reducing-functions';
import barCounterReducer from '../bar-counter/reducer';

const toggleBar = (state) => (
  {
    ...state,
    enabled: toggle(state.enabled)
  }
);

const barReduceMap = {
  [actions.TOGGLE_BAR]: toggleBar,
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
    return barReduceFn(state);
  }

  return {
    ...state,
    counter: barCounterReducer(state.counter, {type})
  };
};

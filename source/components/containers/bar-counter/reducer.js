import actions from './actions';
import DEFAULT_STATE from './defaultState';
import {counterIncrement} from '../../presentational/counter/reducing-functions';

const reduceMap = {
  [actions.BAR_INCREMENT]: counterIncrement
};

export const barCounterIncrementReduce = counterIncrement;

export default (state = DEFAULT_STATE, {type} = {}) => {
  const reduce = reduceMap[type];
  return reduce ? reduce(state, type) : state;
};

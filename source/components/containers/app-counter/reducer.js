import actions from './actions';
import DEFAULT_STATE from './defaultState';
import {counterIncrementReduce} from '../../presentational/counter/counter-reducing-functions';

const reduceMap = {
  [actions.APP_LEVEL_INCREMENT]: counterIncrementReduce
};

export default (state = DEFAULT_STATE, {type} = {}) => {
  const reduce = reduceMap[type];
  return reduce ? reduce(state, type) : state;
};

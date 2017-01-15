import actions from './actions';
import DEFAULT_STATE from './defaultState';
import {counterIncrement} from '../../presentational/counter/reducing-functions';

const reduceMap = {
  [actions.APP_LEVEL_INCREMENT]: counterIncrement
};

export default (state = DEFAULT_STATE, {type} = {}) => {
  const reduce = reduceMap[type];
  return reduce ? reduce(state, type) : state;
};

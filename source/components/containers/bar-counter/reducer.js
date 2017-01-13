import actions from './actions';
import DEFAULT_STATE from './defaultState';
import {counterIncrementReduce} from '../../reduceFunctions/counter/counter-reduce-functions';

const reduceMap = {
  [actions.BAR_INCREMENT]: counterIncrementReduce
};

export default (state = DEFAULT_STATE, {type} = {}) => {
  console.log(type);
  const reduce = reduceMap[type];
  return reduce ? reduce(state, type) : state;
};

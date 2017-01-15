import actions from './actions';
import DEFAULT_STATE from './defaultState';
import {toggle} from '../../presentational/toggler/reducing-functions';


const toggleFoo = (state) => (
  {
    enabled: toggle(state.enabled)
  }
);

const fooReduceMap = {
  [actions.TOGGLE_FOO]: toggleFoo
};

export default (state = DEFAULT_STATE, {type} = {}) => {
  const fooReduceFn = fooReduceMap[type];
  if (fooReduceFn) {
    console.log('fooReduceFn');
    return fooReduceFn(state);
  }

  return state;
};

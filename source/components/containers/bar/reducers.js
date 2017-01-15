import {counterIncrement} from '../bar-counter/reducers';
import {toggle} from '../../presentational/toggler/reducers';

export const barCounterIncrement = (state) => ({
  ...state,
  counter: counterIncrement(state.counter)
});

export const barToggle = (state) => ({
  ...state,
  enabled: toggle(state.enabled)
});

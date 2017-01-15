import {toggle} from '../../presentational/toggler/reducers';

export const fooToggle = (state) => (
  {
    enabled: toggle(state.enabled)
  }
);

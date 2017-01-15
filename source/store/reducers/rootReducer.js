import BAR_DEFAULT_STATE from '../../components/containers/bar/defaultState';
import FOO_DEFAULT_STATE from '../../components/containers/foo/defaultState';
import APP_COUNTER_DEFAULT_STATE from '../../components/containers/app-counter/defaultState';

import * as fooReducers from '../../components/containers/foo/reducers';
import * as barReducers from '../../components/containers/bar/reducers';
import * as appCounterReducers from '../../components/containers/app-counter/reducers';

import fooActions from '../../components/containers/foo/actions';
import barActions from '../../components/containers/bar/actions';
import barCounterActions from '../../components/containers/bar-counter/actions';
import appCounterActions from '../../components/containers/app-counter/actions';

const DEFAULT_STATE = {
  counter: APP_COUNTER_DEFAULT_STATE,
  bar: BAR_DEFAULT_STATE,
  foo: FOO_DEFAULT_STATE
};

export default (state = DEFAULT_STATE, action) => {
  if (action.type === fooActions.TOGGLE_FOO) {
    return {
      counter: state.counter,
      foo: fooReducers.fooToggle(state.foo),
      bar: barReducers.barCounterIncrement(state.bar)
    };
  }

  if (action.type === barActions.TOGGLE_BAR) {
    return {
      counter: state.counter,
      foo: state.foo,
      bar: barReducers.barToggle(state.bar)
    };
  }

  if (action.type === barCounterActions.BAR_INCREMENT) {
    return {
      counter: state.counter,
      foo: state.foo,
      bar: barReducers.barCounterIncrement(state.bar)
    };
  }

  if (action.type === appCounterActions.APP_INCREMENT) {
    return {
      counter: appCounterReducers.counterIncrement(state.counter),
      foo: state.foo,
      bar: state.bar
    };
  }

  return state;
};


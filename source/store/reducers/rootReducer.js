import COUNTER_OF_COUNTERS_DEFAULT_STATE from '../../components/containers/counterOfCounters/defaultState';
import BAR_DEFAULT_STATE from '../../components/containers/bar/defaultState';
import FOO_DEFAULT_STATE from '../../components/containers/foo/defaultState';
import APP_COUNTER_DEFAULT_STATE from '../../components/containers/appCounter/defaultState';

import * as counterOfCountersReducers from '../../components/containers/counterOfCounters/reducers';
import * as fooReducers from '../../components/containers/foo/reducers';
import * as barReducers from '../../components/containers/bar/reducers';
import * as appCounterReducers from '../../components/containers/appCounter/reducers';

import { barStateSelector } from '../../components/containers/bar';
import { fooStateSelector } from '../../components/containers/foo';
import { appCounterStateSelector } from '../../components/containers/appCounter';
import { counterOfCountersStateSelector } from '../../components/containers/counterOfCounters';

import fooActions from '../../components/containers/foo/actions';
import barActions from '../../components/containers/bar/actions';
import barCounterActions from '../../components/containers/barCounter/actions';
import appCounterActions from '../../components/containers/appCounter/actions';

const DEFAULT_STATE = {
  counterOfCounters: COUNTER_OF_COUNTERS_DEFAULT_STATE,
  counter: APP_COUNTER_DEFAULT_STATE,
  bar: BAR_DEFAULT_STATE,
  foo: FOO_DEFAULT_STATE
};

export default (state = DEFAULT_STATE, action) => {
  if (action.type === fooActions.TOGGLE_FOO) {
    return {
      ...state,
      foo: fooReducers.fooToggle(fooStateSelector(state)),
      bar: barReducers.barCounterIncrement(barStateSelector(state))
    };
  }

  if (action.type === barActions.TOGGLE_BAR) {
    return {
      ...state,
      counterOfCounters: state.counterOfCounters,
      bar: barReducers.barToggle(barStateSelector(state))
    };
  }

  if (action.type === barCounterActions.BAR_INCREMENT) {
    return {
      ...state,
      counterOfCounters: counterOfCountersReducers.counterOfCountersIncrement(counterOfCountersStateSelector(state)),
      bar: barReducers.barCounterIncrement(barStateSelector(state))
    };
  }

  if (action.type === appCounterActions.APP_INCREMENT) {
    return {
      ...state,
      counterOfCounters: counterOfCountersReducers.counterOfCountersIncrement(counterOfCountersStateSelector(state)),
      counter: appCounterReducers.counterIncrement(appCounterStateSelector(state))
    };
  }

  return state;
};


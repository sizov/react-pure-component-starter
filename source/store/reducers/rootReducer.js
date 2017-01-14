import barReducer from '../../components/containers/bar/reducer';
import {barCounterOnlyIncrementReduce} from '../../components/containers/bar/reducer';
import fooReducer from '../../components/containers/foo/reducer';
import appCounterReducer from '../../components/containers/app-counter/reducer';
import fooActions from '../../components/containers/foo/actions';

export default (state = {}, action) => {
  const counterState = appCounterReducer(state.counter, action);
  const fooState = fooReducer(state.foo, action);

  if (action.type === fooActions.TOGGLE_FOO) {
    return {
      counter: counterState,
      foo: fooState,
      bar: barCounterOnlyIncrementReduce(state.bar)
    };
  }

  return {
    counter: counterState,
    foo: fooState,
    bar: barReducer(state.bar, action)
  };
};


import barReducer from '../../components/containers/bar/reducer';
import fooReducer from '../../components/containers/foo/reducer';
import appCounterReducer from '../../components/containers/app-counter/reducer';

export default (state = {}, action) => {
  return {
    counter: appCounterReducer(state.counter, action),
    foo: fooReducer(state.foo, action),
    bar: barReducer(state.bar, action)
  };
};


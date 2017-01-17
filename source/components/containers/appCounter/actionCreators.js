import actions from './actions';

export const getIncrementAction = () => ({
  type: actions.APP_INCREMENT
});

//first async action
export const getIncrementAsyncAction = () => {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(getIncrementAction());
    }, 1000);
  }
};

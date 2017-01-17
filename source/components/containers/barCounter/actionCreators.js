import actions from './actions';

export const getIncrementAction = () => ({
  type: actions.BAR_INCREMENT
});

export const getIncrementAsyncAction = () => {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(getIncrementAction());
    }, 1000);
  }
};

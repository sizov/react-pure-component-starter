import actions from './actions';

export const toggleUntoggleEpic = action$ =>
  action$.ofType(actions.TOGGLE_UNTOGGLE_BAR)
    .delay(1000)
    .mapTo({type: actions.TOGGLE_BAR});


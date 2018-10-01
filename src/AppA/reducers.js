import { combineReducers } from 'redux';
import { INCREMENT_A } from './actions';

const initialState = {
  counterA: 0,
};

const AppA = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_A:
      return {
        ...state,
        counterA: state.counterA + 1,
      };
    default:
      return state;
  }
}

export default combineReducers({
  AppA
});
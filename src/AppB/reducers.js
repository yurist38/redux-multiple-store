import { combineReducers } from 'redux';
import { INCREMENT_B } from './actions';

const initialState = {
  counterB: 0,
};

const AppB = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_B:
      return {
        ...state,
        counterB: state.counterB + 1,
      };
    default:
      return state;
  }
}

export default combineReducers({
  AppB
});
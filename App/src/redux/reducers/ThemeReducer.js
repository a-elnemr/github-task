import {TOGGLE_MODE} from '../constants/ActionsTypes';

const initialState = {darkMode: false};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default ThemeReducer;

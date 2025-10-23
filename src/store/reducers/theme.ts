import {
  SET_COLOR_SCHEME,
  TOGGLE_COLOR_SCHEME,
  ThemeActionUnion,
} from '../actions/themeActions';

type ColorScheme = 'light' | 'dark';

export interface ThemeState {
  colorScheme: ColorScheme;
}

const initialState: ThemeState = {
  colorScheme: 'light',
};

const themeReducer = (
  state: ThemeState = initialState,
  action: ThemeActionUnion,
): ThemeState => {
  switch (action.type) {
    case TOGGLE_COLOR_SCHEME:
      return {
        ...state,
        colorScheme: state.colorScheme === 'light' ? 'dark' : 'light',
      };

    case SET_COLOR_SCHEME:
      return {
        ...state,
        colorScheme: action.payload.colorScheme,
      };
    default:
      return state;
  }
};

export default themeReducer;

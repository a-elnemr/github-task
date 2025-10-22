import { ThemeState, TOGGLE_THEME } from '../types';

const initialState: ThemeState = {
  theme: 'light',
};

export const themeReducer = (state = initialState, action: any): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

export const TOGGLE_COLOR_SCHEME = 'TOGGLE_COLOR_SCHEME';
export const SET_COLOR_SCHEME = 'SET_COLOR_SCHEME';

export interface ThemeAction {
  type: typeof TOGGLE_COLOR_SCHEME;
  [key: string]: any;
}

export type ThemeActionUnion = ThemeAction | SetColorSchemeAction;

export interface SetColorSchemeAction {
  type: typeof SET_COLOR_SCHEME;
  payload: {
    colorScheme: 'light' | 'dark';
  };
  [key: string]: any;
}
export const toggleColorScheme = (): ThemeAction => ({
  type: TOGGLE_COLOR_SCHEME,
});
export const setColorScheme = (
  colorScheme: 'light' | 'dark',
): SetColorSchemeAction => ({
  type: SET_COLOR_SCHEME,
  payload: { colorScheme },
});

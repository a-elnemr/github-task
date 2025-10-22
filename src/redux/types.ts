export const SET_TOP = 'SET_TOP';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_CREATED_FROM = 'SET_CREATED_FROM';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export type ThemeType = 'light' | 'dark';

export interface AppState {
  top: number;
  language: string;
  createdFrom: string;
}

export interface ThemeState {
  theme: ThemeType;
}

export interface RootState {
  app: AppState;
  theme: ThemeState;
}

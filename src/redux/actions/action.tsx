import {
  SET_TOP,
  SET_LANGUAGE,
  SET_CREATED_FROM,
  TOGGLE_THEME,
} from '../types';

export const setTop = (top: number) => ({
  type: SET_TOP,
  payload: top,
});

export const setLanguage = (language: string) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setCreatedFrom = (date: string) => ({
  type: SET_CREATED_FROM,
  payload: date,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

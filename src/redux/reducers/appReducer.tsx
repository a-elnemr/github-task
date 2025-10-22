import { SET_TOP, SET_LANGUAGE, SET_CREATED_FROM } from '../types';

interface AppState {
  top: number;
  language: string;
  createdFrom: string;
}

const initialState: AppState = {
  top: 10,
  language: 'javascript',
  createdFrom: '2024-01-01',
};

export const appReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case SET_TOP:
      return { ...state, top: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_CREATED_FROM:
      return { ...state, createdFrom: action.payload };
    default:
      return state;
  }
};

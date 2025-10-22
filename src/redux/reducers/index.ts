import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

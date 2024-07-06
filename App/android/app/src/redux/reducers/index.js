import {combineReducers} from 'redux';
import themeReducer from './ThemeReducer';

export const reducers = combineReducers({
  theme: themeReducer,
});

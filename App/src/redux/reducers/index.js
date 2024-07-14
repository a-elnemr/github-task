import {combineReducers} from 'redux';
import themeReducer from './ThemeReducer';
import RepoReducer from './ReposReducer';

export const reducers = combineReducers({
  theme: themeReducer,
  repos: RepoReducer,
});

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import themeReducer from './reducers/theme';
import repositoriesReducer from './reducers/repositories';

const rootReducer = combineReducers({
  theme: themeReducer,
  repositories: repositoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk) as any);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

import {configureStore} from '@reduxjs/toolkit';
import repositoriesReducer from './slices/repositoriesSlice';

const store = configureStore({
  reducer: {repository: repositoriesReducer},
});
export default store;

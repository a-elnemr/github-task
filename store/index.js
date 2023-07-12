import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
});
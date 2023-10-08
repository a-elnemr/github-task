import {configureStore} from '@reduxjs/toolkit';
import {filterSlice} from './filterSlice';

export const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
  },
});

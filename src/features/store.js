import {configureStore} from '@reduxjs/toolkit';
import topStarsSlice from './topStarsSlice';

export const store = configureStore({
  reducer: {
    topStarsSlice: topStarsSlice,
  },
});

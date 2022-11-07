import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import counterReducer from "../features/counter/counterSlice";
import { githubApi } from "../services/github";

/*
 Counter reducer is useless here

 Requests are managed with Redux using "Redux Toolkit Query" (RTK Query) which is a feature in RTK
*/

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }).concat(githubApi.middleware),
});

setupListeners(store.dispatch);

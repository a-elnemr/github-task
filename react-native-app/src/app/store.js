import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { githubApi } from "../services/github";

/*
 Requests are managed with Redux using "Redux Toolkit Query" (RTK Query) which is a feature in RTK
*/

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }).concat(githubApi.middleware),
});

setupListeners(store.dispatch);

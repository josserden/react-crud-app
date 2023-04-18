import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersApi } from './usersApi';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
});

setupListeners(store.dispatch);

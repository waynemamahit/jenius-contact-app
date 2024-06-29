import { configureStore } from '@reduxjs/toolkit';
import dialogSlice from './features/dialog/dialogSlice';
import snackbarSlice from './features/snackbar/snackbarSlice';
import { contactApi } from './services/contact';

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    snackbar: snackbarSlice,
    dialog: dialogSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

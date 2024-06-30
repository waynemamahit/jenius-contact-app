import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const getSnackbar = createSelector(
  (state: RootState) => state.snackbar,
  (state) => state
);

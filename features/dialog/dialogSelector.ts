import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const getResultDialog = createSelector(
  (state: RootState) => state.dialog,
  ({ result }) => result
);

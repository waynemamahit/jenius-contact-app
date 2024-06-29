import { RootState } from '@/features/store';
import { createSelector } from '@reduxjs/toolkit';

export const getResultDialog = createSelector(
  (state: RootState) => state.dialog,
  ({ result }) => result
);

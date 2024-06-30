import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const getState = (state: RootState) => state.dialog;

export const getDialog = createSelector(getState, (state) => state);

export const getResultDialog = createSelector(getState, ({ result }) => result);

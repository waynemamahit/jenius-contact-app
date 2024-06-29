import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarState } from '../snackbar/snackbarSlice';

export interface DialogState extends SnackbarState {
  title: string;
  result: boolean;
}

const initialState: DialogState = {
  title: '',
  result: false,
  visible: false,
  message: '',
  color: 'white',
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    show: (
      state,
      {
        payload: { title, message },
      }: PayloadAction<{ title: string; message: string }>
    ) => {
      state.visible = true;
      state.title = title;
      state.message = message;
      state.result = false;
    },
    submit: (state) => {
      state.result = true;
      state.visible = false;
    },
    dismissDialog: (state) => {
      state.result = false;
      state.visible = false;
    },
  },
});

export const { show, submit, dismissDialog } = dialogSlice.actions;

export default dialogSlice.reducer;

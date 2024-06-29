import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MD2Colors } from 'react-native-paper';

export interface SnackbarState {
  visible: boolean;
  message: string;
  color: string;
}

const initialState: SnackbarState = {
  visible: false,
  message: '',
  color: MD2Colors.green600,
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showMessage: (
      state,
      {
        payload: { message, color = initialState.color },
      }: PayloadAction<{ message: string; color?: string }>
    ) => {
      state.visible = true;
      state.message = message;
      state.color = color;
    },
    dismissSnackbar: (state) => {
      state.visible = false;
    },
  },
});

export const { showMessage, dismissSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;

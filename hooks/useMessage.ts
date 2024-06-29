import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  dismissSnackbar,
  showMessage,
} from '../features/snackbar/snackbarSlice';

export default function useMessage() {
  const dispatch = useDispatch();

  const showMessageResult = useCallback(
    (message: string) => {
      dispatch(
        showMessage({
          message,
        })
      );
      setTimeout(() => {
        dispatch(dismissSnackbar());
      }, 3000);
    },
    [dispatch]
  );

  return { showMessageResult };
}

import {
  dismissSnackbar,
  showMessage,
} from '@/features/snackbar/snackbarSlice';
import { MD2Colors } from 'react-native-paper';
import { useDispatch } from 'react-redux';

export default function useMessage(isSuccess: boolean) {
  const dispatch = useDispatch();

  return {
    showMessageResult(message: string, error: string) {
      dispatch(
        showMessage({
          message: isSuccess ? message : error,
          ...(isSuccess
            ? {}
            : {
                color: MD2Colors.redA100,
              }),
        })
      );
      setTimeout(() => {
        dispatch(dismissSnackbar());
      }, 3000);
    },
  };
}

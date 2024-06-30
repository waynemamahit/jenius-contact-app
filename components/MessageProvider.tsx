import React from 'react';
import { Button, Dialog, Portal, Snackbar, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getDialog } from '../features/dialog/dialogSelector';
import { dismissDialog, submit } from '../features/dialog/dialogSlice';
import { getSnackbar } from '../features/snackbar/snackbarSelector';
import { dismissSnackbar } from '../features/snackbar/snackbarSlice';

export default function MessageProvider() {
  const dialog = useSelector(getDialog);
  const snackbar = useSelector(getSnackbar);
  const dispatch = useDispatch();

  return (
    <Portal>
      <Snackbar
        visible={snackbar.visible}
        style={{ backgroundColor: snackbar.color }}
        onDismiss={() => dispatch(dismissSnackbar())}
        action={{ label: 'Undo' }}
      >
        {snackbar.message}
      </Snackbar>
      <Dialog
        visible={dialog.visible}
        onDismiss={() => dispatch(dismissDialog())}
      >
        <Dialog.Title>{dialog.title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{dialog.message}</Text>
        </Dialog.Content>
        <Dialog.Actions style={{ margin: 'auto' }}>
          <Button onPress={() => dispatch(submit())}>OK</Button>
          <Button onPress={() => dispatch(dismissDialog())}>Cancel</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

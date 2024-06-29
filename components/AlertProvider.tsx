import React from 'react';
import { Button, Dialog, Portal, Snackbar, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { dismissDialog, submit } from '@/features/dialog/dialogSlice';
import { RootState } from '@/store';
import { dismissSnackbar } from '@/features/snackbar/snackbarSlice';

export default function AlertProvider() {
  const { dialog, snackbar } = useSelector((state: RootState) => state);
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

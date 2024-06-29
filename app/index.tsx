import CardItem from '@/components/CardItem';
import BaseLayout from '@/components/layouts/BaseLayout';
import {
  dismissDialog,
  getResultDialog,
  show,
} from '@/features/dialog/dialogSlice';
import useMessage from '@/hooks/useMessage';
import { contactApi } from '@/services/contact';
import { AppDispatch } from '@/store';
import { ContactData } from '@/types/Contact';
import { ReactNode, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
  const { data, isLoading } = contactApi.endpoints.getContact.useQuery(0);
  const [deleteContact, { isLoading: deleteLoad, isSuccess }] =
    contactApi.endpoints.deleteContact.useMutation();
  const [selectedItem, setSelectedItem] = useState<ContactData | null>(null);
  const { showMessageResult } = useMessage(isSuccess);
  const result = useSelector(getResultDialog);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (result) {
      (async () => {
        if (selectedItem) {
          dispatch(dismissDialog());
          await deleteContact(selectedItem);
          showMessageResult(
            'Contact has been deleted',
            'Failed delete contact'
          );
        }
      })();
    }
  });

  return (
    <BaseLayout loading={isLoading || deleteLoad}>
      <FlatList
        data={data?.data ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardItem
            contact={item}
            right={() =>
              (
                <IconButton
                  icon="delete"
                  iconColor={MD3Colors.error40}
                  size={30}
                  onPress={() => {
                    dispatch(
                      show({
                        title: 'Are you sure want to delete this contact?',
                        message: `You won't be able to revert this!`,
                      })
                    );
                    setSelectedItem(item);
                  }}
                />
              ) as ReactNode
            }
          />
        )}
      />
    </BaseLayout>
  );
}

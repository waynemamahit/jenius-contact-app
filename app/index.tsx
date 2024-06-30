import { useNavigation } from 'expo-router';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../components/CardItem';
import BaseLayout from '../components/layouts/BaseLayout';
import { getResultDialog } from '../features/dialog/dialogSelector';
import { dismissDialog, show } from '../features/dialog/dialogSlice';
import { AppDispatch } from '../features/store';
import useMessage from '../hooks/useMessage';
import { contactApi } from '../services/contact';
import { ContactData } from '../types/Contact';

export default function HomeScreen() {
  const { data, isLoading, isFetching, refetch } =
    contactApi.endpoints.getContact.useQuery(0);
  const [deleteContact, { isLoading: deleteLoad }] =
    contactApi.endpoints.deleteContact.useMutation();
  const [selectedItem, setSelectedItem] = useState<ContactData | null>(null);
  const { showMessageResult } = useMessage();
  const result = useSelector(getResultDialog);
  const dispatch: AppDispatch = useDispatch();
  const { addListener } = useNavigation();

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    addListener('focus', () => refetch());
  }, [addListener, refetch]);

  useEffect(() => {
    if (result) {
      (async () => {
        if (selectedItem) {
          dispatch(dismissDialog());
          await deleteContact(selectedItem);
          showMessageResult('Contact has been deleted!');
        }
      })();
    }
  }, [deleteContact, dispatch, result, selectedItem, showMessageResult]);

  return (
    <BaseLayout loading={isLoading}>
      <FlatList
        data={data?.data ?? []}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
        }
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardItem
            contact={item}
            right={() =>
              (
                <IconButton
                  icon="delete"
                  iconColor={MD3Colors.error40}
                  loading={deleteLoad && selectedItem?.id === item.id}
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

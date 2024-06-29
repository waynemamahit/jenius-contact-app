import CardItem from '@/components/CardItem';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ContactForm } from '@/models/Contact';
import { contactApi } from '@/services/contact';
import { ContactData } from '@/types/Contact';
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { Alert } from 'react-native';

export default function DetailContactScreen() {
  const globParam = useGlobalSearchParams<{ id: string }>();
  const localParam = useLocalSearchParams<{ id: string }>();
  const id = globParam?.id ?? localParam?.id ?? '';

  const { data, isLoading } = contactApi.endpoints.getContactById.useQuery({
    id,
  });
  const [updateContact, { isSuccess, isLoading: formLoad }] =
    contactApi.endpoints.updateContact.useMutation();

  const onSubmit = useCallback(
    async (data: ContactForm) => {
      await updateContact({
        id,
        ...data,
      }).unwrap();
      if (isSuccess) {
        Alert.alert('Update contact successfully!');
      }
    },
    [id, updateContact, isSuccess]
  );

  return (
    <BaseLayout loading={isLoading}>
      <CardItem
        mode="contained"
        contact={data?.data as ContactData}
        loading={formLoad}
        onSubmit={onSubmit}
      ></CardItem>
    </BaseLayout>
  );
}

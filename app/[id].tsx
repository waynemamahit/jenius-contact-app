import {
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
} from 'expo-router';
import CardItem from '../components/CardItem';
import BaseLayout from '../components/layouts/BaseLayout';
import useMessage from '../hooks/useMessage';
import { ContactForm } from '../models/Contact';
import { contactApi } from '../services/contact';
import { ContactData } from '../types/Contact';
import { ScrollView } from 'react-native';

export default function DetailContactScreen() {
  const globParam = useGlobalSearchParams<{ id: string }>();
  const localParam = useLocalSearchParams<{ id: string }>();
  const id = globParam?.id ?? localParam?.id ?? '';

  const { data, isLoading } = contactApi.endpoints.getContactById.useQuery({
    id,
  });
  const [updateContact, { isLoading: formLoad }] =
    contactApi.endpoints.updateContact.useMutation();
  const { showMessageResult } = useMessage();

  return (
    <BaseLayout loading={isLoading}>
      <ScrollView style={{ flex: 1 }}>
        <CardItem
          mode="contained"
          contact={data?.data as ContactData}
          loading={formLoad}
          onSubmit={async (data: ContactForm) => {
            await updateContact({
              id,
              ...data,
            });
            showMessageResult('Contact has been update!');
            router.navigate('');
          }}
        ></CardItem>
      </ScrollView>
    </BaseLayout>
  );
}

import { contactApi } from '@/services/contact';
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text } from 'react-native';
import { Surface } from 'react-native-paper';

export default function FormContact() {
  const globParam = useGlobalSearchParams<{ id: string }>();
  const localParam = useLocalSearchParams<{ id: string }>();

  const { data, isLoading } = contactApi.endpoints.getContactById.useQuery({
    id: globParam?.id ?? localParam?.id ?? '',
  });

  return (
    <ScrollView>
      <Surface>
        <Text>This is for form</Text>
        <Text>{isLoading ? 'Loading...' : JSON.stringify(data, null, 4)}</Text>
      </Surface>
    </ScrollView>
  );
}

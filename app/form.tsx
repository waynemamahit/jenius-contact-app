import { contactApi } from '@/services/contact';
import { ScrollView } from 'react-native';
import { Surface, Text } from 'react-native-paper';

export default function FormScreen() {
  const { data, isLoading } = contactApi.endpoints.getContactById.useQuery({
    id: '',
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

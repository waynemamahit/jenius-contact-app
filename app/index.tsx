import { contactApi } from '@/services/contact';
import { ScrollView } from 'react-native';
import { Surface, Text } from 'react-native-paper';

export default function HomeScreen() {
  const { data, isLoading } = contactApi.endpoints.getContact.useQuery(0);

  return (
    <ScrollView>
      <Surface>
        <Text>Hello World</Text>
        <Text>{isLoading ? 'Loading...' : JSON.stringify(data, null, 4)}</Text>
      </Surface>
    </ScrollView>
  );
}

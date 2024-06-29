import { OnSubmitType } from '@/types/Base';
import { ContactData } from '@/types/Contact';
import { router } from 'expo-router';
import { Avatar, Card } from 'react-native-paper';
import FormCard from './FormCard';

const left = (uri: string) => {
  const result = () => <Avatar.Image size={48} source={{ uri }} />;
  return result;
};

const CardItem = ({
  contact,
  mode = 'outlined',
  loading = false,
  right,
  onSubmit,
}: {
  contact: ContactData;
  mode?: 'outlined' | 'contained';
  loading?: boolean;
  onSubmit?: OnSubmitType;
  right?: ((props: { size: number }) => React.ReactNode);
}) => {
  const isOutlined = mode === 'outlined';
  const fullName = `${contact.firstName} ${contact.lastName}`;
  const age = `Age: ${contact.age}`;

  return (
    <FormCard
      mode={mode}
      style={{
        marginVertical: 8,
        cursor: isOutlined ? 'pointer' : undefined,
      }}
      loading={loading}
      form={contact}
      onPress={() => (isOutlined ? router.push('/' + contact.id) : undefined)}
      onSubmit={onSubmit}
    >
      <Card.Title
        title={fullName}
        subtitle={age}
        left={left(contact.photo)}
        style={{ margin: isOutlined ? undefined : 'auto' }}
        right={right}
      />
    </FormCard>
  );
};

export default CardItem;

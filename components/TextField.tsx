import { ContactForm } from '@/models/Contact';
import { Control, useController } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

export default function TextField({
  label = '',
  name,
  control,
}: {
  label?: string;
  name: 'firstName' | 'lastName' | 'age' | 'photo';
  control: Control<ContactForm>;
}) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: '',
  });
  return (
    <TextInput
      label={label}
      value={value as string | undefined}
      onChangeText={onChange}
    />
  );
}

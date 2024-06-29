import { router } from 'expo-router';
import FormCard from '../components/FormCard';
import BaseLayout from '../components/layouts/BaseLayout';
import useMessage from '../hooks/useMessage';
import { ContactForm } from '../models/Contact';
import { contactApi } from '../services/contact';

const newForm = new ContactForm();

export default function NewContactScreen() {
  const [saveContact, { isLoading }] =
    contactApi.endpoints.saveContact.useMutation();
  const { showMessageResult } = useMessage();

  return (
    <BaseLayout>
      <FormCard
        mode={'contained'}
        form={newForm}
        loading={isLoading}
        onSubmit={async (data: ContactForm) => {
          await saveContact({
            ...data,
            age: Number(data.age) || 0,
          });
          showMessageResult('New Contact has been added!');
          router.navigate('');
        }}
      />
    </BaseLayout>
  );
}

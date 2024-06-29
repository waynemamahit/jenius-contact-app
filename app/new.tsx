import FormCard from '@/components/FormCard';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ContactForm } from '@/models/Contact';
import { contactApi } from '@/services/contact';

export default function NewContactScreen() {
  const [saveContact, { isLoading }] =
    contactApi.endpoints.saveContact.useMutation();

  return (
    <BaseLayout loading={isLoading}>
      <FormCard
        mode={'contained'}
        form={new ContactForm()}
        loading={isLoading}
        onSubmit={(data) => saveContact(data)}
      />
    </BaseLayout>
  );
}

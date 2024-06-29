import renderer from 'react-test-renderer';
import { ContactForm } from '../../models/Contact';
import FormCard from '../FormCard';

const newForm = new ContactForm();

describe('FormCard', () => {
  it('renders the form fields correctly', () => {
    const tree = renderer
      .create(
        <FormCard
          mode="contained"
          form={newForm}
          onSubmit={jest.fn()}
          onPress={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toBeDefined();
  });
});

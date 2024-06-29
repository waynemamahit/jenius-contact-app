import { Contact } from '../types/Contact';

export class ContactForm implements Contact {
  age: string | number = '';
  firstName = '';
  lastName = '';
  photo = '';
}

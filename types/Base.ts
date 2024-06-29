import { SubmitHandler } from 'react-hook-form';
import { ContactForm } from '../models/Contact';
import { ContactData } from './Contact';

export type ApiResponse<Data = ContactData> = {
  message: string;
  data?: Data;
};

export type OnSubmitType = SubmitHandler<ContactForm>;

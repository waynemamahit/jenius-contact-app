import { ContactData } from './Contact';

export type ApiResponse = {
  message: string;
  data?: ContactData;
};

export type Contact = {
  firstName: string;
  lastName: string;
  age: string | number;
  photo: string;
};

export type ContactParam = {
  id: string;
};

export type ContactData = Contact & ContactParam;

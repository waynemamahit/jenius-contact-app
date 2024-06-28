export type Contact = {
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export type ContactParam = {
  id: string;
};

export type ContactData = Contact & ContactParam;

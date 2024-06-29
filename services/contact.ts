import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContactForm } from '../models/Contact';
import { ApiResponse } from '../types/Base';
import type { ContactData, ContactParam } from '../types/Contact';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://contact.herokuapp.com/',
  }),
  endpoints: (builder) => ({
    getContact: builder.query<ApiResponse<ContactData[]>, number>({
      query: () => 'contact',
    }),
    saveContact: builder.mutation<ApiResponse, ContactForm>({
      query: (body) => ({
        url: 'contact',
        method: 'POST',
        body,
      }),
    }),
    deleteContact: builder.mutation<ApiResponse, ContactData>({
      query: (body) => ({
        url: `contact/${body.id}`,
        method: 'DELETE',
        body,
      }),
    }),
    getContactById: builder.query<ApiResponse, ContactParam>({
      query: ({ id }: { id: string }) => ({
        url: `contact/${id}`,
        method: 'GET',
      }),
    }),
    updateContact: builder.mutation<ApiResponse, ContactData>({
      query: (body) => ({
        url: `contact/${body.id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

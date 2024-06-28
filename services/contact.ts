import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Contact, ContactData, ContactParam } from '../types/Contact';
import { ApiResponse } from '@/types/Base';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://contact.herokuapp.com/',
  }),
  endpoints: (builder) => ({
    getContact: builder.query<ContactData, number>({
      query: () => 'contact',
    }),
    saveContact: builder.mutation<ApiResponse, Contact>({
      query: (body) => ({
        url: 'contact',
        method: 'POST',
        body,
      }),
    }),
    deleteContact: builder.mutation<ApiResponse, ContactParam>({
      query: ({ id }: { id: string }) => ({
        url: `contact/${id}`,
        method: 'DELETE',
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

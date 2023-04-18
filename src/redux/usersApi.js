import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROUTES } from 'utils/routes';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ROUTES.USERS,
      providesTags: ['Users'],
    }),
    getUser: builder.query({
      query: userId => `${ROUTES.USERS}/${userId}`,
    }),
    createUser: builder.mutation({
      query: body => ({
        url: ROUTES.USERS,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteContact: builder.mutation({
      query: userId => ({
        url: `${ROUTES.USERS}/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useDeleteContactMutation,
} = usersApi;

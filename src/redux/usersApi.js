import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROUTES } from 'utils/routes';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api',
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
    deleteUser: builder.mutation({
      query: userId => ({
        url: `${ROUTES.USERS}/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: ({ userId, body }) => ({
        url: `${ROUTES.USERS}/${userId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = usersApi;

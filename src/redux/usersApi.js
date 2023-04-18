import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROUTES } from 'utils/routes';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ROUTES.USERS,
    }),
    getUser: builder.query({
      query: userId => `${ROUTES.USERS}/${userId}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = usersApi;

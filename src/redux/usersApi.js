import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users',
    }),

    getUser: builder.query({
      query: userId => `/users/${userId}`,
      transformResponse: response => {
        const user = JSON.parse(response);

        return {
          ...user,
          address: `${user.address.street}, ${user.address.city}`,
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;

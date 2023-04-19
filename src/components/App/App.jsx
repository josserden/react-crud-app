import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { ROUTES } from 'utils/routes';

import { HomePage } from 'page-components/HomePage';
import { UserPage } from 'page-components/UserPage';
import { UsersPage } from 'page-components/UsersPage';
import { Layout } from 'layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          <Route path={ROUTES.USER} element={<UserPage />} />

          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

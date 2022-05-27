import React, { ReactElement } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';

import { HomePage } from '@app/pages/HomePage';
import { OrganizationPage } from '@app/pages/OrganizationPage';

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="/organizations">
            <Route index element={<Navigate to="/" />} />
            <Route path=":organizationId" element={<OrganizationPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };

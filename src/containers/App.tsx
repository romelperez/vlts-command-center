import React, { ReactElement } from 'react';

import { MainLayout } from '@app/views/MainLayout';
import { Header } from '@app/containers/Header';
import { Controls } from '@app/containers/Controls';
import { Explorer } from '@app/containers/Explorer';

const App = (): ReactElement => {
  return (
    <MainLayout
      header={<Header />}
      aside={<Controls />}
      workspace={<Explorer />}
    />
  );
};

export { App };

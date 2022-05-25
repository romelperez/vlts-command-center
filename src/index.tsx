/** @jsx jsx */
import './global.css';
import { jsx } from '@emotion/react';
import { createRoot } from 'react-dom/client';

import { ThemeSetup } from '@app/containers/ThemeSetup';
import { Router } from '@app/containers/Router';

const root = createRoot(document.querySelector('#root') as HTMLDivElement);

root.render(
  <ThemeSetup>
    <Router />
  </ThemeSetup>
);

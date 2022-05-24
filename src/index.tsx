/** @jsx jsx */
import './global.css';
import { jsx } from '@emotion/react';
import { createRoot } from 'react-dom/client';

import { ThemeSetup } from '@app/containers/ThemeSetup';
import { App } from '@app/containers/App';

const root = createRoot(document.querySelector('#root') as HTMLDivElement);

root.render(
  <ThemeSetup>
    <App />
  </ThemeSetup>
);

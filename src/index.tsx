/** @jsx jsx */
import './global.css';
import { jsx } from '@emotion/react';
import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

const root = createRoot(document.querySelector('#root') as HTMLDivElement);

root.render(
  <Fragment>
    <CssBaseline />
    <header
      css={{
        display: 'flex',
        padding: 16,
        backgroundColor: '#002b47',
        color: '#fff',
        fontFamily: 'Eina, sans-serif'
      }}
    >
      <div
        css={{
          flex: 1
        }}
      />
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.25rem'
        }}
      >
        <a
          css={{
            display: 'block'
          }}
          href="/"
        >
          <img
            css={{
              margin: 0,
              width: 'auto',
              height: '1.5em',
              verticalAlign: 'top'
            }}
            src="/logo.png"
            alt="Voltus' Logo"
          />
        </a>
      </div>
    </header>
  </Fragment>
);

import React, { ReactElement, Fragment, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Eina, sans-serif',
    h1: { fontSize: '1.5rem', fontWeight: 600 },
    h2: { fontSize: '1.25rem', fontWeight: 600 },
    h3: { fontSize: '1.125rem', fontWeight: 600 },
    h4: { fontSize: '1rem', fontWeight: 600 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 }
  },
  palette: {
    primary: {
      main: '#002b47'
    },
    secondary: {
      main: '#8dc63f'
    }
  }
});

interface ThemeSetupProps {
  children: ReactNode;
}

const ThemeSetup = (props: ThemeSetupProps): ReactElement => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline enableColorScheme />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export type { ThemeSetupProps };
export { ThemeSetup };

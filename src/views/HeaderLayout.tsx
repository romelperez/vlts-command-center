/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

interface HeaderLayoutProps {
  title?: string;
}

const HeaderLayout = (props: HeaderLayoutProps): ReactElement => {
  const { title } = props;

  return (
    <AppBar
      position="static"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        p: 2
      }}
    >
      <Typography
        component="h1"
        variant="h1"
        css={{
          flex: 1
        }}
      >
        {title}
      </Typography>
      <a
        css={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.25rem'
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
    </AppBar>
  );
};

export type { HeaderLayoutProps };
export { HeaderLayout };

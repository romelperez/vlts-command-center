/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

interface HeaderLayoutProps {
  className?: string;
  title?: string;
}

const HeaderLayout = (props: HeaderLayoutProps): ReactElement => {
  const { className, title } = props;

  const sectionTitle = title || 'Dashboard';

  useEffect(() => {
    window.document.title = `${sectionTitle} | Voltus`;
  }, [sectionTitle]);

  return (
    <AppBar
      className={className}
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
        {sectionTitle}
      </Typography>
      <Link
        css={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.25rem'
        }}
        to="/"
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
      </Link>
    </AppBar>
  );
};

export type { HeaderLayoutProps };
export { HeaderLayout };

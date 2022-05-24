import React, { ReactElement, ReactNode } from 'react';
import Box from '@mui/material/Box';

interface MainLayoutProps {
  header?: ReactNode;
  aside?: ReactNode;
  workspace?: ReactNode;
}

const MainLayout = (props: MainLayoutProps): ReactElement => {
  const { header, aside, workspace } = props;

  return (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'grid',
        gridTemplateAreas: `
          'header header header'
          'aside main main'
        `,
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '300px auto',
        backgroundColor: theme.palette.grey[100]
      })}
    >
      <Box sx={{ gridArea: 'header' }}>{header}</Box>
      <Box sx={{ gridArea: 'aside' }}>{aside}</Box>
      <Box sx={{ gridArea: 'main' }}>{workspace}</Box>
    </Box>
  );
};

export type { MainLayoutProps };
export { MainLayout };

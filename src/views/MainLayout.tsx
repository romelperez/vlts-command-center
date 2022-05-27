import React, { ReactElement, ReactNode } from 'react';
import Box from '@mui/material/Box';
interface MainLayoutProps {
  className?: string;
  header?: ReactNode;
  aside?: ReactNode;
  workspace?: ReactNode;
}

const MainLayout = (props: MainLayoutProps): ReactElement => {
  const { className, header, aside, workspace } = props;

  return (
    <Box
      className={className}
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
        gridTemplateColumns: 'minmax(320px, 400px) auto',
        backgroundColor: theme.palette.grey[100]
      })}
    >
      <Box sx={{ gridArea: 'header' }}>{header}</Box>
      <Box sx={{ gridArea: 'aside', minHeight: 0 }}>{aside}</Box>
      <Box sx={{ gridArea: 'main', minHeight: 0 }}>{workspace}</Box>
    </Box>
  );
};

export type { MainLayoutProps };
export { MainLayout };

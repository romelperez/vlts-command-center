import React, { ReactElement, ReactNode } from 'react';
import Box from '@mui/material/Box';

interface ExplorerLayoutProps {
  className?: string;
  children?: ReactNode;
}

const ExplorerLayout = (props: ExplorerLayoutProps): ReactElement => {
  const { className, children } = props;
  return (
    <Box
      className={className}
      sx={{
        height: '100%'
      }}
    >
      {children}
    </Box>
  );
};

export type { ExplorerLayoutProps };
export { ExplorerLayout };

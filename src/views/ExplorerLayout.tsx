import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';

interface ExplorerLayoutProps {
  className?: string;
}

const ExplorerLayout = (props: ExplorerLayoutProps): ReactElement => {
  const { className } = props;
  return (
    <Box
      className={className}
      sx={{
        height: '100%'
      }}
    >
      &nbsp;
    </Box>
  );
};

export { ExplorerLayout };

import React, { ReactElement, ReactNode } from 'react';
import Paper from '@mui/material/Paper';

interface ControlsLayoutProps {
  children?: ReactNode;
}

const ControlsLayout = (props: ControlsLayoutProps): ReactElement => {
  const { children } = props;

  return (
    <Paper
      component="aside"
      variant="outlined"
      square
      sx={{
        height: '100%'
      }}
    >
      {children}
    </Paper>
  );
};

export type { ControlsLayoutProps };
export { ControlsLayout };

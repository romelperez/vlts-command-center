import React, { ReactElement, ReactNode } from 'react';
import Paper from '@mui/material/Paper';

interface ControlsLayoutProps {
  className?: string;
  children?: ReactNode;
}

const ControlsLayout = (props: ControlsLayoutProps): ReactElement => {
  const { className, children } = props;

  return (
    <Paper
      className={className}
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

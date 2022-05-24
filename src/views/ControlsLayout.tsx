/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

interface ControlsLayoutProps {}

const ControlsLayout = (props: ControlsLayoutProps): ReactElement => {
  return (
    <Box
      component="aside"
      sx={{
        height: '100%'
      }}
    >
      <Paper
        variant="outlined"
        square
        sx={{
          height: '100%'
        }}
      >
        &nbsp;
      </Paper>
    </Box>
  );
};

export type { ControlsLayoutProps };
export { ControlsLayout };

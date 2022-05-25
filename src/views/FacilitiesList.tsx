import React, { ReactElement } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { DataFacility } from '@app/types';

interface FacilitiesListProps {
  className?: string;
  facilities: DataFacility[];
}

const FacilitiesList = (props: FacilitiesListProps): ReactElement => {
  const { className, facilities } = props;
  return (
    <TableContainer className={className}>
      <Table size="small" stickyHeader>
        <TableHead sx={{ whiteSpace: 'nowrap', wordBreak: 'break-all' }}>
          <TableRow>
            <TableCell>Facility</TableCell>
            <TableCell>Reading</TableCell>
            <TableCell>Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {facilities.map((facility) => (
            <TableRow key={facility.id} hover>
              <TableCell>{facility.name}</TableCell>
              <TableCell>{facility.reading ?? 0} kw</TableCell>
              <TableCell>{facility.updatedAt ?? '--'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export type { FacilitiesListProps };
export { FacilitiesList };

import React, { ReactElement } from 'react';
import formatDate from 'date-fns/format';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { DataFacility } from '@app/types';
import { formatNumber } from '@app/tools/formatNumber';

interface FacilitiesListProps {
  className?: string;
  facilities: DataFacility[];
}

const FacilitiesList = (props: FacilitiesListProps): ReactElement => {
  const { className, facilities } = props;

  const totalReading = facilities
    .map(({ reading }) => reading ?? 0)
    .reduce((total, item) => total + item);

  return (
    <TableContainer className={className}>
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow sx={{ whiteSpace: 'nowrap', wordBreak: 'break-all' }}>
            <TableCell>Facility</TableCell>
            <TableCell>Reading</TableCell>
            <TableCell>Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {facilities.map((facility) => (
            <TableRow key={facility.id} hover>
              <TableCell>{facility.name}</TableCell>
              <TableCell>
                {formatNumber((facility.reading ?? 0) * 1000, 'W')}
              </TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap', wordBreak: 'break-all' }}>
                {facility.updatedAt
                  ? formatDate(
                      new Date(facility.updatedAt),
                      'yyyy-MM-dd HH:mm:ss'
                    )
                  : '--'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow sx={{ bgcolor: 'secondary.light' }}>
            <TableCell>
              <b>All</b>
            </TableCell>
            <TableCell>
              <b>{formatNumber(totalReading * 1000, 'W')}</b>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export type { FacilitiesListProps };
export { FacilitiesList };

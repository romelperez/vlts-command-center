import React, { ReactElement, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { DataFacility } from '@app/types';

interface FacilityReadingUpdateProps {
  facilities: DataFacility[];
  onUpdateFacility: (facilityId: string, reading: number) => void;
}

const FacilityReadingUpdate = (
  props: FacilityReadingUpdateProps
): ReactElement => {
  const { facilities, onUpdateFacility } = props;

  const [facilityId, setFacilityId] = useState('');
  const [reading, setReading] = useState('0');

  const isFacilityIdValid = String(facilityId ?? '') !== '';
  const isReadingValid = Number.isFinite(Number(reading));
  const isValid = isFacilityIdValid && isReadingValid;

  const onSubmit = () => {
    if (!isValid) {
      return;
    }

    onUpdateFacility(facilityId, Number(reading));
  };

  return (
    <Box component="form" sx={{ p: 2 }}>
      <Typography component="h1" variant="h2" sx={{ mb: 1 }}>
        Update Reading
      </Typography>
      <FormControl margin="normal" fullWidth>
        {/* InputLabel type error. */}
        <InputLabel {...({ size: 'small' } as any)}>Facility</InputLabel>
        <Select
          label="Facility"
          size="small"
          value={facilityId}
          onChange={(event) => setFacilityId(event.target.value)}
        >
          {facilities.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <FormControl margin="normal" sx={{ flex: 1, mr: 2 }}>
          <TextField
            type="number"
            label="kW"
            size="small"
            value={reading}
            onChange={(event) => setReading(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl margin="normal">
          <Button
            color="primary"
            variant="outlined"
            disabled={!isValid}
            onClick={onSubmit}
          >
            Update
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export type { FacilityReadingUpdateProps };
export { FacilityReadingUpdate };

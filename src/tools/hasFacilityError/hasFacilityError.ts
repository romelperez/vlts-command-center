import { DataFacility } from '@app/types';

const hasFacilityError = (facility: DataFacility): boolean => {
  const reading = facility.reading ?? 0;
  const threshold = facility.threshold ?? 0;
  return reading > threshold;
};

export { hasFacilityError };

import useSWR from 'swr';
import ky from 'ky';

import { DataOrganization_WithFacilities } from '@app/types';
import { API_URL } from '@app/constants';

const useOrganizationWithFacilities = (organizationId: string) => {
  return useSWR<DataOrganization_WithFacilities>(
    ['organizationWithFacilities', organizationId],
    () => ky.get(`${API_URL}/facilities/${organizationId}`).json()
  );
};

export { useOrganizationWithFacilities };

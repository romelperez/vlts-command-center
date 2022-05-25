import useSWR from 'swr';
import ky from 'ky';

import { DataOrganization_WithFacilities } from '@app/types';
import { API_URL } from '@app/constants';

const useOrganizationWithFacilities = (id: string) => {
  return useSWR<DataOrganization_WithFacilities>(
    ['organizationWithFacilities', id],
    () => ky.get(`${API_URL}/facilities/${id}`).json()
  );
};

export { useOrganizationWithFacilities };

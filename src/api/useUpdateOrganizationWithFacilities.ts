// TODO: Implement.

import { useSWRConfig } from 'swr';

import { DataOrganization_WithFacilities } from '@app/types';

const useUpdateOrganizationWithFacilities = () => {
  const { mutate } = useSWRConfig();

  return (organizationId: string, facilityId: string, reading: number) => {
    mutate(
      ['organizationWithFacilities', organizationId],
      (organization?: DataOrganization_WithFacilities) => {
        if (!organization) {
          return;
        }

        const facilities = organization.facilities.map((facility) => {
          if (facility.id === facilityId) {
            const updatedAt = new Date().toUTCString();
            return { ...facility, reading, updatedAt };
          }
          return facility;
        });

        return { ...organization, facilities };
      },
      {
        revalidate: false,
        rollbackOnError: true
      }
    );
  };
};

export { useUpdateOrganizationWithFacilities };

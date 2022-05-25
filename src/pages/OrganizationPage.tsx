import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

import { DataFacility } from '@app/types';
import { useOrganizationWithFacilities } from '@app/api/useOrganizationWithFacilities';
import { MainLayout } from '@app/views/MainLayout';
import { HeaderLayout } from '@app/views/HeaderLayout';
import { ControlsLayout } from '@app/views/ControlsLayout';
import { FacilitiesList } from '@app/views/FacilitiesList';

interface OrganizationPageControlsProps {
  facilities: DataFacility[];
}

const OrganizationPageControls = (
  props: OrganizationPageControlsProps
): ReactElement => {
  const { facilities } = props;
  return <FacilitiesList facilities={facilities} />;
};

const OrganizationPage = (): ReactElement => {
  const { organizationId } = useParams();
  const { data: organizationWithFacilities } = useOrganizationWithFacilities(
    organizationId as string
  );

  const title = organizationWithFacilities?.name ?? '';

  return (
    <MainLayout
      header={<HeaderLayout title={title} />}
      aside={
        <ControlsLayout>
          {!organizationWithFacilities && <LinearProgress color="secondary" />}
          {!!organizationWithFacilities && (
            <OrganizationPageControls
              facilities={organizationWithFacilities.facilities}
            />
          )}
        </ControlsLayout>
      }
    />
  );
};

export { OrganizationPage };

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactElement, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

import { useOrganizationWithFacilities } from '@app/api/useOrganizationWithFacilities';
import { useUpdateOrganizationWithFacilities } from '@app/api/useUpdateOrganizationWithFacilities';
import { MainLayout } from '@app/views/MainLayout';
import { HeaderLayout } from '@app/views/HeaderLayout';
import { ControlsLayout } from '@app/views/ControlsLayout';
import { FacilitiesList } from '@app/views/FacilitiesList';
import { FacilityReadingUpdate } from '@app/views/FacilityReadingUpdate';
import { ExplorerMap } from '@app/views/ExplorerMap';

const OrganizationPage = (): ReactElement => {
  const params = useParams();
  const organizationId = params.organizationId as string;

  const organizationResponse = useOrganizationWithFacilities(organizationId);
  const updateFacility = useUpdateOrganizationWithFacilities();

  const organizationWithFacilities = organizationResponse.data;
  const hasData = !!organizationWithFacilities;
  const isLoading = !organizationWithFacilities;
  const hasError = !!organizationResponse.error;
  const title = organizationWithFacilities?.name ?? '';
  const facilities = organizationWithFacilities?.facilities ?? [];

  const onUpdateFacility = (facilityId: string, reading: number) =>
    updateFacility(organizationId, facilityId, reading);

  return (
    <MainLayout
      header={<HeaderLayout title={title} />}
      aside={
        <ControlsLayout css={{ display: 'flex', flexDirection: 'column' }}>
          {hasError && <p>Error fetching data.</p>}
          {isLoading && <LinearProgress color="secondary" />}
          {hasData && (
            <Fragment>
              <FacilityReadingUpdate
                facilities={facilities}
                onUpdateFacility={onUpdateFacility}
              />
              <Divider variant="fullWidth" />
              <FacilitiesList facilities={facilities} />
            </Fragment>
          )}
        </ControlsLayout>
      }
      workspace={hasData && <ExplorerMap facilities={facilities} />}
    />
  );
};

export { OrganizationPage };

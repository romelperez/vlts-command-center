import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';

import { useOrganizations } from '@app/api/useOrganizations';
import { MainLayout } from '@app/views/MainLayout';
import { ControlsLayout } from '@app/views/ControlsLayout';
import { HeaderLayout } from '@app/views/HeaderLayout';

const HomePageOrganizations = (): ReactElement => {
  const { data: organizations, error } = useOrganizations();

  if (error) {
    return <p>Error loading organizations list.</p>;
  }

  if (!organizations) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <List>
      {organizations.map((organization) => (
        <Link key={organization.id} to={`/organizations/${organization.id}`}>
          <ListItem dense>
            <ListItemText>
              <ListItemText sx={{ color: 'primary.main' }}>
                {organization.name}
              </ListItemText>
            </ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

const HomePage = (): ReactElement => {
  return (
    <MainLayout
      header={<HeaderLayout />}
      aside={
        <ControlsLayout>
          <HomePageOrganizations />
        </ControlsLayout>
      }
    />
  );
};

export { HomePage };

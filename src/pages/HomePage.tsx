import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';

import { useOrganizations } from '@app/api/useOrganizations';
import { MainLayout } from '@app/views/MainLayout';
import { Header } from '@app/containers/Header';
import { ControlsLayout } from '@app/views/ControlsLayout';

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
          <ListItem>
            <ListItemText>
              <ListItemText>{organization.name}</ListItemText>
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
      header={<Header />}
      aside={
        <ControlsLayout>
          <HomePageOrganizations />
        </ControlsLayout>
      }
    />
  );
};

export { HomePage };

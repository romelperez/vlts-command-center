import useSWR from 'swr';

import { DataOrganization } from '@app/types';

const useOrganizations = () => {
  return useSWR<DataOrganization[]>('organizations', () => {
    // TODO: Implement.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: '1', name: 'Acme Corp' },
          { id: '2', name: 'Acme CorpStark Industries' },
          { id: '3', name: 'Wayne Enterprises' }
        ]);
      }, 200);
    });
  });
};

export { useOrganizations };

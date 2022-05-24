import React, { ReactElement } from 'react';

import { ExplorerLayout } from '@app/views/ExplorerLayout';

interface ExplorerProps {
  className?: string;
}

const Explorer = (props: ExplorerProps): ReactElement => {
  const { className } = props;
  return <ExplorerLayout className={className} />;
};

export { Explorer };

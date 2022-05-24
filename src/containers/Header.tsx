import React, { ReactElement } from 'react';

import { HeaderLayout } from '@app/views/HeaderLayout';

interface HeaderProps {}

const Header = (props: HeaderProps): ReactElement => {
  const title = 'Organization Name';
  return <HeaderLayout title={title} />;
};

export type { HeaderProps };
export { Header };

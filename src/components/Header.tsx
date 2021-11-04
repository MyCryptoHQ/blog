import { t } from '@lingui/macro';
import { Box, Header as UIHeader, HeaderButton, Logo } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import { Link } from './Link';

export const Header: FunctionComponent = ({ children }) => (
  <UIHeader
    leftComponents={
      <Box
        sx={{
          p: {
            display: ['none', 'block']
          }
        }}
      >
        <Link
          to="https://app.mycrypto.com/?utm_medium=organic&utm_source=blog&utm_campaign=nav"
          isExternal={true}
        >
          <HeaderButton icon="home" text={t`app.mycrypto.com`} />
        </Link>
      </Box>
    }
    centerComponents={
      <Link to="/">
        <Logo minWidth={['130px', null, '200px']} maxWidth={['130px', null, '200px']} />
      </Link>
    }
    rightComponents={
      <Box
        sx={{
          p: {
            display: ['none', 'block']
          }
        }}
      >
        <Link to="mailto:support@mycrypto.com" isExternal={true}>
          <HeaderButton icon="help" text={t`Contact`} />
        </Link>
      </Box>
    }
  >
    {children}
  </UIHeader>
);

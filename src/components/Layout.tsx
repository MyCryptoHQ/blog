import { Trans } from '@lingui/macro';
import { Body, Flex, SubHeader } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import { createGlobalStyle } from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';
import { SearchField } from './SearchField';

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby {
    margin: 0;
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background.page};
  }
`;

export const Layout: FunctionComponent = ({ children }) => (
  <Flex flexDirection="column" minHeight="100vh">
    <GlobalStyle />
    <Header>
      <SubHeader>
        <Flex alignItems="center" justifyContent="center">
          <Body fontSize="tiny" marginRight="3">
            <Trans>What would you like to read about?</Trans>
          </Body>
          <SearchField marginX="0" />
        </Flex>
      </SubHeader>
    </Header>

    {children}

    <Footer />
  </Flex>
);

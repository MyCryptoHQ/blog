import { t, Trans } from '@lingui/macro';
import { Box, Breadcrumb, Breadcrumbs, Container, SubHeading } from '@mycrypto/ui';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import { parse } from 'query-string';
import type { FunctionComponent } from 'react';

import { Link, Page, Search } from '../components';

const SearchPage: FunctionComponent = () => {
  const location = useLocation();
  const query = parse(location.search).query as string;

  if (typeof window !== 'undefined' && !query) {
    // Prevent manually navigating to /search
    navigate('/');

    return null;
  }

  return (
    <Page title={t`Search`} noIndex={true}>
      <Container flex={1} marginY="5">
        <Breadcrumbs>
          <Breadcrumb>
            <Link to="/">
              <Trans>Homepage</Trans>
            </Link>
          </Breadcrumb>
          <Breadcrumb>
            <Trans>Search Results</Trans>
          </Breadcrumb>
        </Breadcrumbs>

        <Box marginTop="48px">
          <SubHeading fontSize="large" lineHeight="120%" marginBottom="20px">
            <Trans>Search</Trans>
          </SubHeading>
          <SubHeading
            as="h3"
            fontSize="medium"
            fontWeight="400"
            lineHeight="29px"
            color="text.accent"
            marginBottom="4"
          >
            <Trans>Results for "{query}"</Trans>
          </SubHeading>

          <Search query={query} />
        </Box>
      </Container>
    </Page>
  );
};

export default SearchPage;

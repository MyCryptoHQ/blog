import { Trans } from '@lingui/macro';
import { Body, Box, Button, Container, Flex, SubHeading, Tag } from '@mycrypto/ui';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { FunctionComponent } from 'react';

import type { GhostPost } from '../types';
import { Link } from './Link';

export interface FeaturedProps {
  post: Pick<GhostPost, 'slug' | 'title' | 'excerpt' | 'image'>;
}

export const Featured: FunctionComponent<FeaturedProps> = ({ post }) => {
  const image = getImage(post.image)!;

  return (
    <Container marginTop={[0, null, '5']} marginBottom="5" paddingX={[0, null, '3']}>
      <GatsbyImage alt={post.title} image={image} style={{ gridArea: '1 / 1' }} />
      <Box
        marginX={['3', null, '4']}
        marginTop="-32px"
        maxWidth="870px"
        sx={{
          position: 'relative',
          zIndex: '1',
          background: 'white',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'accordion.border',
          borderRadius: 'large'
        }}
      >
        <Flex height="100%" alignItems="flex-end">
          <Box width="100%" paddingX="4" paddingY="24px">
            <Tag type="transparent">
              <Trans>Featured</Trans>
            </Tag>
            <SubHeading
              fontSize={['small', null, 'large']}
              lineHeight="54px"
              color="text.primary"
              marginBottom="2"
            >
              {post.title}
            </SubHeading>
            <Body fontSize="16px" lineHeight="19px" marginBottom="24px">
              {post.excerpt}
            </Body>
            <Link to={`/${post.slug}`}>
              <Button>
                <Trans>Read Now</Trans>
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

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
    <Box sx={{ display: 'grid' }} marginBottom="6">
      <GatsbyImage alt={post.title} image={image} style={{ gridArea: '1 / 1' }} />
      <Box
        sx={{
          gridArea: '1 / 1',
          zIndex: '1',
          background: 'linear-gradient(176.73deg, rgba(255, 255, 255, 0) 2.7%, #FFFFFF 97.33%)'
        }}
      >
        <Flex height="100%" alignItems="flex-end">
          <Container width="100%" paddingY="24px">
            <Tag type="transparent">
              <Trans>Featured</Trans>
            </Tag>
            <SubHeading fontSize="45px" lineHeight="54px" color="text.primary" marginBottom="2">
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
          </Container>
        </Flex>
      </Box>
    </Box>
  );
};

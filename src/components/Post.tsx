import { Trans } from '@lingui/macro';
import { Body, Box, Button, Flex, InlineBody, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { FunctionComponent } from 'react';

import type { GhostPost } from '../types';
import Card from './Card';
import { Label } from './Label';
import { Link } from './Link';

export interface PostProps {
  post: Pick<GhostPost, 'slug' | 'title' | 'excerpt' | 'timeToRead' | 'primaryTag' | 'image'>;
}

export const Post: FunctionComponent<PostProps> = ({ post }) => {
  const image = getImage(post.image);

  return (
    <Card as="article" padding="0">
      {image && (
        <Link to={`/${post.slug}`}>
          <GatsbyImage alt={post.title} image={image} />
        </Link>
      )}
      <Box padding="24px" flex={1}>
        <Flex flexDirection="column" height="100%">
          <Flex alignItems="center" marginBottom="3">
            {post.primaryTag && <Label post={post as Required<Pick<GhostPost, 'primaryTag'>>} />}
            <InlineBody fontSize="12px" fontWeight="bold" marginLeft={post.primaryTag ? '3' : '0'}>
              <Trans>{post.timeToRead} Min Read</Trans>
            </InlineBody>
          </Flex>
          <Box flex={1}>
            <Link to={`/${post.slug}`}>
              <SubHeading fontSize="24px" lineHeight="29px" marginBottom="12px">
                {post.title}
              </SubHeading>
              <Body marginBottom="3" sx={{ flexGrow: '1', wordBreak: 'break-word' }}>
                {post.excerpt}
              </Body>
            </Link>
          </Box>
          <Link to={`/${post.slug}`}>
            <Button>
              <Trans>Read Now</Trans>
            </Button>
          </Link>
        </Flex>
      </Box>
    </Card>
  );
};

export const postQuery = graphql`
  fragment Post on GhostPost {
    slug
    title
    excerpt
    timeToRead: reading_time
    primaryTag: primary_tag {
      slug
      name
    }
    image {
      childImageSharp {
        gatsbyImageData(width: 850, height: 531, transformOptions: { cropFocus: CENTER })
      }
    }
  }
`;

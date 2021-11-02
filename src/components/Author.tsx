import { Body, Flex } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import type { FunctionComponent } from 'react';

import type { GhostAuthor } from '../types';
import Card from './Card';
import { Link } from './Link';
import { ProfilePicture } from './ProfilePicture';

export interface AuthorProps {
  author: Pick<GhostAuthor, 'slug' | 'name' | 'image'>;
}

export const Author: FunctionComponent<AuthorProps> = ({ author }) => (
  <Link to={`/author/${author.slug}`} marginRight="24px" marginBottom="24px">
    <Card padding="16px" width="fit-content">
      <Flex alignItems="center">
        <ProfilePicture image={author.image} alt={author.name} marginRight="3" />
        <Body fontSize="small">{author.name}</Body>
      </Flex>
    </Card>
  </Link>
);

export const authorQuery = graphql`
  fragment Author on GhostAuthor {
    slug
    name
    image: childFile {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 40, height: 40)
      }
    }
  }
`;

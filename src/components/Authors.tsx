import type { FlexProps } from '@mycrypto/ui';
import { Flex } from '@mycrypto/ui';
import { graphql, useStaticQuery } from 'gatsby';
import type { FunctionComponent } from 'react';

import type { GhostAuthor } from '../types';
import { Author } from './Author';

export type AuthorsProps = FlexProps;

interface QueryResult {
  allGhostAuthor: {
    nodes: GhostAuthor[];
  };
}

export const Authors: FunctionComponent<AuthorsProps> = ({ children, ...props }) => {
  const authors = useStaticQuery<QueryResult>(graphql`
    {
      allGhostAuthor(filter: { slug: { nin: "emmanuel" } }) {
        nodes {
          ...Author
        }
      }
    }
  `);

  return (
    <Flex flexWrap="wrap" {...props}>
      {authors.allGhostAuthor.nodes.map((author) => (
        <Author key={`author-${author.slug}`} author={author} />
      ))}
    </Flex>
  );
};

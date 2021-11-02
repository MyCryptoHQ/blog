import type { FlexProps } from '@mycrypto/ui';
import { Flex } from '@mycrypto/ui';
import { graphql, useStaticQuery } from 'gatsby';
import type { FunctionComponent } from 'react';

import type { GhostTag } from '../types';
import { Tag } from './Tag';

export type TagsProps = FlexProps;

interface QueryResult {
  allGhostTag: {
    nodes: GhostTag[];
  };
}

export const Tags: FunctionComponent<TagsProps> = ({ ...props }) => {
  const tags = useStaticQuery<QueryResult>(graphql`
    {
      allGhostTag(sort: { fields: [postCount], order: DESC }, limit: 5) {
        nodes {
          slug
          name
        }
      }
    }
  `);

  return (
    <Flex flexWrap="wrap" {...props}>
      {tags.allGhostTag.nodes.map((tag) => (
        <Tag key={`tag-${tag.slug}`} tag={tag} />
      ))}
    </Flex>
  );
};

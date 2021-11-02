import { t } from '@lingui/macro';
import { Container } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import type { FunctionComponent } from 'react';

import { Page, Post, Posts } from '../components';
import type { GhostPost } from '../types';


export interface AllPostsProps {
  data: {
    allGhostPost: {
      nodes: Pick<
        GhostPost,
        'slug' | 'title' | 'excerpt' | 'timeToRead' | 'primaryTag' | 'image'
      >[];
    };
  };
}

const AllPosts: FunctionComponent<AllPostsProps> = ({ data }) => (
  <Page title={t`All Articles`}>
    <Container flex={1} marginY="5">
      <Posts title={t`All Articles`} columns={3}>
        {data.allGhostPost.nodes.map((post) => (
          <Post key={`post-${post.slug}`} post={post} />
        ))}
      </Posts>
    </Container>
  </Page>
);

export default AllPosts;

export const query = graphql`
  {
    allGhostPost(
      filter: { visibility: { eq: "public" } }
      sort: { fields: [published_at], order: DESC }
    ) {
      nodes {
        ...Post
      }
    }
  }
`;

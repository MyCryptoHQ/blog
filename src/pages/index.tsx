import { t, Trans } from '@lingui/macro';
import { Body, Box, Container, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import type { FunctionComponent } from 'react';

import { Authors, Featured, Link, Page, Post, Posts, Tags } from '../components';
import type { GhostPost } from '../types';

export interface IndexProps {
  data: {
    featuredPost: {
      nodes: [Pick<GhostPost, 'slug' | 'title' | 'excerpt' | 'image'>];
    };
    recentPosts: {
      nodes: Pick<
        GhostPost,
        'slug' | 'title' | 'excerpt' | 'timeToRead' | 'primaryTag' | 'image'
      >[];
    };
    featuredPosts: {
      nodes: Pick<
        GhostPost,
        'slug' | 'title' | 'excerpt' | 'timeToRead' | 'primaryTag' | 'image'
      >[];
    };
    allPosts: {
      nodes: Pick<
        GhostPost,
        'slug' | 'title' | 'excerpt' | 'timeToRead' | 'primaryTag' | 'image'
      >[];
    };
  };
}

export const Index: FunctionComponent<IndexProps> = ({ data }) => (
  <Page>
    <Featured post={data.featuredPost.nodes[0]} />
    <Box flex={1}>
      <Container>
        <Posts title={t`Featured Articles`} columns={3} marginBottom="5">
          {data.featuredPosts.nodes.map((post) => (
            <Post key={`featured-post-${post.slug}`} post={post} />
          ))}
        </Posts>
        <Posts title={t`Recent Articles`} columns={3} marginBottom="5">
          {data.recentPosts.nodes.map((post) => (
            <Post key={`recent-post-${post.slug}`} post={post} />
          ))}
        </Posts>
        <Box>
          <SubHeading fontSize="large" lineHeight="120%" marginBottom="4">
            <Trans>All Articles</Trans>
          </SubHeading>

          <Body
            fontSize="small"
            fontWeight="bold"
            color="text.discrete"
            marginBottom="24px"
            sx={{ textTransform: 'uppercase' }}
          >
            <Trans>Filter by author</Trans>
          </Body>
          <Authors marginBottom="16px" />

          <Body
            fontSize="small"
            fontWeight="bold"
            color="text.discrete"
            marginBottom="24px"
            sx={{ textTransform: 'uppercase' }}
          >
            <Trans>Filter by topic</Trans>
          </Body>
          <Tags marginBottom="16px" />

          <Posts columns={3} marginBottom="5">
            {data.allPosts.nodes.map((post) => (
              <Post key={`post-${post.slug}`} post={post} />
            ))}
          </Posts>
          <Box fontSize="small" fontWeight="bold" textAlign="center" marginBottom="5">
            <Link to="/posts">
              <Trans>Show More</Trans>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  </Page>
);

export default Index;

export const query = graphql`
  {
    featuredPost: allGhostPost(
      filter: { visibility: { eq: "public" } }
      sort: { fields: [published_at], order: DESC }
      limit: 1
    ) {
      nodes {
        slug
        title
        excerpt
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              aspectRatio: 3
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }

    featuredPosts: allGhostPost(
      filter: { featured: { eq: true }, visibility: { eq: "public" } }
      sort: { fields: [published_at], order: DESC }
      limit: 3
    ) {
      nodes {
        ...Post
      }
    }

    recentPosts: allGhostPost(
      filter: { visibility: { eq: "public" } }
      sort: { fields: [published_at], order: DESC }
      limit: 3
      skip: 1
    ) {
      nodes {
        ...Post
      }
    }

    allPosts: allGhostPost(
      filter: { visibility: { eq: "public" } }
      sort: { fields: [published_at], order: DESC }
      skip: 4
      limit: 12
    ) {
      nodes {
        ...Post
      }
    }
  }
`;

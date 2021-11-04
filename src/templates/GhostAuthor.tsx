import { Plural, Trans } from '@lingui/macro';
import { Body, Box, Breadcrumb, Breadcrumbs, Container, Flex, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import type { FunctionComponent } from 'react';

import { Link, Page, Post, Posts, Section, ProfilePicture } from '../components';
import type { GhostAuthor, GhostPost } from '../types';

export interface AuthorProps {
  pageContext: {
    slug: string;
  };
  data: {
    ghostAuthor: Pick<GhostAuthor, 'slug' | 'name' | 'description' | 'image'>;
    allGhostPost: {
      nodes: Pick<
        GhostPost,
        'slug' | 'title' | 'excerpt' | 'timeToRead' | 'primaryTag' | 'image'
      >[];
    };
  };
}

const Author: FunctionComponent<AuthorProps> = ({ data }) => (
  <Page title={data.ghostAuthor.name} description={data.ghostAuthor.description}>
    <Section marginBottom="6">
      <Breadcrumbs marginBottom="4">
        <Breadcrumb>
          <Link to="/">
            <Trans>Homepage</Trans>
          </Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link to={`/tag/${data.ghostAuthor.slug}`}>
            <Trans>{data.ghostAuthor.name}</Trans>
          </Link>
        </Breadcrumb>
      </Breadcrumbs>
      <Box textAlign="center">
        <Body marginBottom="2" color="text.accent" sx={{ textTransform: 'uppercase' }}>
          <Plural
            value={data.allGhostPost.nodes.length}
            zero="No articles"
            one="# article"
            many="# articles"
            other="# articles"
          />
        </Body>
        <Flex alignItems="center" justifyContent="center">
          <ProfilePicture
            image={data.ghostAuthor.image}
            alt={data.ghostAuthor.name}
            marginRight="3"
          />
          <SubHeading fontSize="large" lineHeight="120%" sx={{ textTransform: 'capitalize' }}>
            {data.ghostAuthor.name}
          </SubHeading>
        </Flex>
      </Box>
    </Section>
    <Container flex={1} marginBottom="6">
      <Posts>
        {data.allGhostPost.nodes.map((post) => (
          <Post key={`post-${post.slug}`} post={post} />
        ))}
      </Posts>
    </Container>
  </Page>
);

export default Author;

export const query = graphql`
  query AuthorQuery($slug: String!) {
    ghostAuthor(slug: { eq: $slug }) {
      slug
      name
      description: meta_description
      image {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 80, height: 80)
        }
      }
    }

    allGhostPost(filter: { primary_author: { slug: { eq: $slug } } }) {
      nodes {
        ...Post
      }
    }
  }
`;

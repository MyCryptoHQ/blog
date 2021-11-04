import { Plural, Trans } from '@lingui/macro';
import { Body, Box, Breadcrumb, Breadcrumbs, Container, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import type { FunctionComponent } from 'react';

import { Link, Page, Post, Posts, Section } from '../components';
import type { GhostPost, GhostTag } from '../types';

export interface TagProps {
  pageContext: {
    slug: string;
  };
  data: {
    ghostTag: Pick<GhostTag, 'slug' | 'name'>;
    allGhostPost: {
      nodes: Pick<
        GhostPost,
        'slug' | 'title' | 'excerpt' | 'timeToRead' | 'primaryTag' | 'image'
      >[];
    };
  };
}

const Tag: FunctionComponent<TagProps> = ({ data }) => (
  <Page title={data.ghostTag.name}>
    <Section marginBottom="6">
      <Breadcrumbs marginBottom="4">
        <Breadcrumb>
          <Link to="/">
            <Trans>Homepage</Trans>
          </Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link to={`/tag/${data.ghostTag.slug}`} sx={{ textTransform: 'capitalize' }}>
            <Trans>{data.ghostTag.name}</Trans>
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
          />
        </Body>
        <SubHeading fontSize="large" lineHeight="120%" sx={{ textTransform: 'capitalize' }}>
          {data.ghostTag.name}
        </SubHeading>
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

export default Tag;

export const query = graphql`
  query TagQuery($slug: String!) {
    ghostTag(slug: { eq: $slug }) {
      slug
      name
    }

    allGhostPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        ...Post
      }
    }
  }
`;

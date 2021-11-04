import { Trans } from '@lingui/macro';
import { Box, Breadcrumb, Breadcrumbs, Container, Flex, SubHeading } from '@mycrypto/ui';
import { graphql } from 'gatsby';
import type { FunctionComponent } from 'react';

import { Contents, Label, Link, Page } from '../components';
import { Sidebar } from '../components/Sidebar';
import type { GhostPost } from '../types';

export interface PostProps {
  data: {
    ghostPost: Pick<
      GhostPost,
      | 'slug'
      | 'title'
      | 'excerpt'
      | 'publishedAt'
      | 'timestamp'
      | 'primaryTag'
      | 'tags'
      | 'primaryAuthor'
      | 'fields'
      | 'image'
    >;
  };
}

export const Post: FunctionComponent<PostProps> = ({ data }) => (
  <Page
    title={data.ghostPost.title}
    description={data.ghostPost.excerpt}
    author={data.ghostPost.primaryAuthor}
    timestamp={data.ghostPost.timestamp}
    image={data.ghostPost.image}
    keyWords={data.ghostPost.tags.map((tag) => tag.name)}
  >
    <Container flex={1} marginY="5">
      <Breadcrumbs marginBottom="5">
        <Breadcrumb>
          <Link to="/">
            <Trans>Homepage</Trans>
          </Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link to="/posts">Posts</Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link to={`/${data.ghostPost.slug}`}>{data.ghostPost.title}</Link>
        </Breadcrumb>
      </Breadcrumbs>

      <Flex flexDirection={['column', null, 'row']}>
        <Box paddingRight="4" flex={1}>
          <SubHeading fontSize="large" lineHeight="120%" marginBottom="20px">
            {data.ghostPost.title}
          </SubHeading>
          <Flex marginBottom="5" flexDirection={['column', 'row']}>
            <SubHeading
              as="h3"
              fontSize="medium"
              fontWeight="400"
              lineHeight="29px"
              color="text.accent"
              marginRight="3"
            >
              {data.ghostPost.publishedAt}
            </SubHeading>
            {data.ghostPost.primaryTag && (
              <Box marginTop={['10px', '0']}>
                <Label post={data.ghostPost} />
              </Box>
            )}
          </Flex>

          <Contents html={data.ghostPost.fields.html} />
        </Box>

        <Sidebar post={data.ghostPost} />
      </Flex>
    </Container>
  </Page>
);

export default Post;

export const query = graphql`
  query PostQuery($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      slug
      title
      excerpt
      fields {
        html
      }
      publishedAt: published_at(formatString: "MMMM Do, YYYY")
      timestamp: published_at
      primaryTag: primary_tag {
        name
        slug
      }
      tags {
        name
      }
      primaryAuthor: primary_author {
        ...Author
      }
      image {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200, height: 630)
        }
      }
    }
  }
`;

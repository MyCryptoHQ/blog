import type { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

import type { GhostPost } from '../src/types';

const config: GatsbyConfig = {
  jsxRuntime: 'automatic',
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://blog.mycrypto.com/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-nprogress',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: 'https://blog.mycrypto.com',
        contentApiKey: process.env.GHOST_API_KEY,
        version: 'v3'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: resolve(__dirname, '../src/assets/images/logo.svg'),
        name: 'MyCrypto Blog',
        short_name: 'MyCrypto Blog',
        start_url: '/',
        background_color: '#1d334f'
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '16',
        matomoUrl: 'https://analytics.mycryptoapi.com',
        siteUrl: 'https://blog.mycrypto.com/',
        disableCookies: true,
        localScript: '/vendor/matomo.js'
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://blog.mycrypto.com'
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'blog.mycrypto.com',
        protocol: 'https',
        hostname: 'blog.mycrypto.com',
        generateRedirectObjectsForPermanentRedirects: true
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'posts',
        engine: 'lunr',
        query: `
          {
            allGhostPost (
              filter: { visibility: { eq: "public" } }
            ) {
              nodes {
                slug
                title
                excerpt
                timeToRead: reading_time
                tags {
                  name
                }
                primaryAuthor: primary_author {
                  name
                }
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
            }
          }
        `,
        ref: 'slug',
        index: ['slug', 'title', 'excerpt', 'tags', 'author'],
        store: ['slug', 'title', 'excerpt', 'timeToRead', 'primaryTag', 'image'],
        normalizer: ({ data }: { data: { allGhostPost: { nodes: GhostPost[] } } }) =>
          data.allGhostPost.nodes.map((node) => ({
            ...node,
            tags: node.tags.map((tag) => tag.name),
            author: node.primaryAuthor.name
          }))
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            title: 'MyCrypto Blog',
            output: '/rss.xml',
            query: `
              {
                allGhostPost (
                  filter: { visibility: { eq: "public" } }
                  sort: { fields: [published_at], order: DESC }
                ) {
                  nodes {
                    slug
                    title
                    excerpt
                    publishedAt: published_at
                    fields {
                      html
                    }
                  }
                }
              }
            `,
            serialize: ({
              query: { site, allGhostPost }
            }: {
              query: {
                site: { siteMetadata: { siteUrl: string } };
                allGhostPost: { nodes: GhostPost[] };
              };
            }) =>
              allGhostPost.nodes.map((node) => ({
                title: node.title,
                description: node.excerpt,
                date: node.publishedAt,
                url: `${site.siteMetadata.siteUrl}/${node.slug}`,
                guid: `${site.siteMetadata.siteUrl}/${node.slug}`,
                custom_elements: [
                  {
                    'content:encoded': node.fields.html
                  }
                ]
              }))
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'blog.mycrypto.com',
        protocol: 'https',
        hostname: 'blog.mycrypto.com',
        generateRedirectObjectsForPermanentRedirects: true
      }
    }
  ]
};

export default config;

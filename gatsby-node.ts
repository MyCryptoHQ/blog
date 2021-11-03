import type { GatsbyNode, Node, Resolvers } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { resolve } from 'path';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import unified from 'unified';

import { imageProcessor } from './config/plugins';

const gatsbyNode: GatsbyNode = {
  async onCreateNode({ node, actions, store, cache, reporter, createNodeId }) {
    const { createNode, createNodeField } = actions;

    const processImage = async (field: string) => {
      if (!node[field]) {
        return;
      }

      const fileNode = await createRemoteFileNode({
        url: node[field] as string,
        store,
        cache,
        reporter,
        createNode,
        createNodeId
      });

      createNodeField({ node, name: 'imageId', value: fileNode.id });
    };

    const processHtml = async () => {
      if (!node.html) {
        return;
      }

      const file = await unified()
        .use(rehypeParse, { fragment: true })
        .use(imageProcessor, { store, cache, reporter, createNode, createNodeId })
        .use(rehypeStringify)
        .process(node.html as string);

      createNodeField({ node, name: 'html', value: String(file) });
    };

    if (node.internal.type === 'GhostPost') {
      await processImage('feature_image');
      await processHtml();
    }

    if (node.internal.type === 'GhostAuthor') {
      await processImage('profile_image');
    }
  },

  async createSchemaCustomization({ actions }) {
    const { createTypes } = actions;

    createTypes(`
      type GhostPost implements Node {
        image: File @link(from: "fields.imageId")
      }
      
      type GhostAuthor implements Node {
        image: File @link(from: "fields.imageId")
      }
    `);
  },

  async createResolvers({ createResolvers }): Promise<void> {
    const resolvers: Resolvers = {
      GhostTag: {
        postCount: {
          type: 'Int!',
          async resolve(node: Node, _, { nodeModel }): Promise<number> {
            const { totalCount } = await nodeModel.findAll({
              type: 'GhostPost',
              query: {
                filter: {
                  primary_tag: {
                    slug: {
                      eq: node.slug
                    }
                  }
                }
              }
            });

            return totalCount();
          }
        }
      }
    };

    createResolvers(resolvers);
  },

  async createPages({ graphql, reporter, actions }) {
    const { createPage } = actions;

    const createPagesForNode = async (type: string, prefix: string) => {
      const { data, errors } = await graphql<{ [key: string]: { nodes: { slug: string }[] } }>(`
        {
          all${type} {
            nodes {
              slug
            }
          }
        }
      `);

      if (errors || !data) {
        return reporter.panicOnBuild(`Failed to create pages for ${type}`, errors);
      }

      data[`all${type}`].nodes.forEach(({ slug }) => {
        createPage({
          path: `${prefix}${slug}`,
          component: resolve(__dirname, `src/templates/${type}.tsx`),
          context: {
            slug
          }
        });
      });
    };

    await createPagesForNode('GhostAuthor', '/author/');
    await createPagesForNode('GhostPost', '/');
    await createPagesForNode('GhostTag', '/tag/');
  }
};

export default gatsbyNode;

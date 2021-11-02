import type { Actions, GatsbyCache, Reporter, Store, NodePluginArgs } from 'gatsby';
import { fluid } from 'gatsby-plugin-sharp';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import type { Node } from 'unist';
import visit from 'unist-util-visit';

interface Settings {
  store: Store;
  cache: GatsbyCache;
  reporter: Reporter;
  createNode: Actions['createNode'];
  createNodeId: NodePluginArgs['createNodeId'];
}

interface ImageNode {
  properties: {
    src: string;
    srcset: string;
    width: string;
    height: string;
    sizes: string;
  };
}

const getExtension = (url: string): string | undefined =>
  url.split(/[#?]/)[0].split('.').pop()?.trim();

export const imageProcessor =
  ({ store, cache, reporter, createNode, createNodeId }: Settings) =>
  async (ast: Node) => {
    const nodes: ImageNode[] = [];

    visit(ast, 'element', (node) => {
      if ((node as unknown as Record<string, string>).tagName !== 'img') {
        return;
      }

      const image = node as unknown as ImageNode;
      const extension = getExtension(image.properties.src);
      if (extension === 'ico' || extension === 'gif' || extension === 'svg') {
        return;
      }

      nodes.push(image);
    });

    for (const node of nodes) {
      try {
        const file = await createRemoteFileNode({
          url: node.properties.src,
          store,
          cache,
          reporter,
          createNode,
          createNodeId
        });

        const { src, srcSet, sizes } = await fluid({ file, args: {}, cache, reporter });
        if (src && srcSet) {
          node.properties.src = src;
          node.properties.srcset = srcSet;
          node.properties.sizes = sizes;
        }
      } catch {
        // noop
      }
    }
  };

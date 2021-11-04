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
  parentId: string;
}

interface HTMLNode extends Node {
  tagName: string;
  children: HTMLNode[];
}

interface ImageNode extends HTMLNode {
  properties: {
    className: string[];
    src: string;
    srcset: string;
    width: string;
    height: string;
    sizes: string;
    loading: string;
    decoding: string;
  };
}

const getExtension = (url: string): string | undefined =>
  url.split(/[#?]/)[0].split('.').pop()?.trim();

export const imageProcessor =
  ({ store, cache, reporter, createNode, createNodeId, parentId }: Settings) =>
  async (ast: Node) => {
    const nodes: ImageNode[] = [];

    visit(ast, 'element', (node: HTMLNode) => {
      if (node.tagName !== 'img') {
        return;
      }

      const image = node as ImageNode;
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
          parentNodeId: parentId,
          store,
          cache,
          reporter,
          createNode,
          createNodeId
        });

        const { src, srcSet, sizes } = await fluid({ file, args: {}, cache, reporter });
        if (src && srcSet) {
          node.properties.className.push('gatsby-resp-image-image');
          node.properties.src = src;
          node.properties.srcset = srcSet;
          node.properties.sizes = sizes;
          node.properties.loading = 'lazy';
          node.properties.decoding = 'async';
        }
      } catch {
        // noop
      }
    }
  };

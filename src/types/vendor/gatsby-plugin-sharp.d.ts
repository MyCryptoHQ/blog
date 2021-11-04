declare module 'gatsby-plugin-sharp' {
  import type { GatsbyCache, Node, Reporter } from 'gatsby';

  export function fixed(args: {
    file: Node;
    args: { maxWidth: number };
    reporter: Reporter;
    cache: GatsbyCache;
  }): Promise<{ src: string; srcSet: string }>;

  export function fluid(args: {
    file: Node;
    args: { maxWidth?: number };
    reporter: Reporter;
    cache: GatsbyCache;
  }): Promise<{
    src: string;
    srcSet: string;
    presentationWidth: number;
    presentationHeight: number;
    sizes: string;
  }>;
}

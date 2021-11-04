import type { ImageDataLike } from 'gatsby-plugin-image';

export interface GhostPost {
  slug: string;
  title: string;
  plaintext: string;
  excerpt: string;
  timeToRead: string;
  publishedAt: string;
  timestamp: string;
  fields: {
    html: string;
  };
  primaryTag: GhostTag;
  tags: GhostTag[];
  primaryAuthor: GhostAuthor;
  image: ImageDataLike;
}

export interface GhostTag {
  slug: string;
  name: string;
}

export interface GhostAuthor {
  slug: string;
  name: string;
  description?: string;
  image: ImageDataLike;
}

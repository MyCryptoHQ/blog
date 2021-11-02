import { graphql, useStaticQuery } from 'gatsby';
import type { ImageDataLike } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import type { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

import type { GhostAuthor } from '../types';

export interface MetadataProps {
  title?: string;
  description?: string;
  image?: ImageDataLike;
  author?: Pick<GhostAuthor, 'name'>;
  timestamp?: string;
  keyWords?: string[];
  noIndex?: boolean;
}

interface QueryResult {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
  ghostSettings: {
    title?: string;
    description?: string;
    lang?: string;
    metaTitle?: string;
    metaDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitter?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
  };
}

export const Metadata: FunctionComponent<MetadataProps> = ({
  title,
  description,
  image,
  author,
  timestamp,
  keyWords,
  noIndex = false
}) => {
  const { site, ghostSettings: meta } = useStaticQuery<QueryResult>(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      ghostSettings {
        title
        description
        lang
        metaTitle: meta_title
        metaDescription: meta_description
        ogTitle: og_title
        ogDescription: og_description
        ogImage: og_image
        twitter
        twitterTitle: twitter_title
        twitterDescription: twitter_description
        twitterImage: twitter_image
      }
    }
  `);

  const imageUrl = image && getImage(image)?.images?.fallback?.src;

  return (
    <Helmet htmlAttributes={{ lang: meta.lang ?? 'en_US' }}>
      <title>{`${title ? `${title} | ` : ''}${meta.metaTitle ?? meta.title}`}</title>
      <meta name="apple-mobile-web-app-title" content={meta.metaTitle ?? meta.title} />
      <meta name="description" content={description ?? meta.metaDescription ?? meta.description} />
      {keyWords && keyWords.length > 0 && <meta name="keywords" content={keyWords.join(', ')} />}

      <meta property="og:title" content={title ?? meta.ogTitle ?? meta.title} />
      <meta property="og:site_name" content={meta.ogTitle ?? meta.title} />
      <meta
        property="og:description"
        content={description ?? meta.ogDescription ?? meta.description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={meta.lang ?? 'en_US'} />
      <meta
        property="og:image"
        content={image ? `${site.siteMetadata.siteUrl}${imageUrl}` : meta.ogImage}
      />
      <meta property="og:image:alt" content={title ?? meta.twitterTitle ?? meta.title} />
      {author && <meta property="article:author" content={author.name} />}
      {timestamp && <meta property="article:published_time" content={timestamp} />}

      <meta name="twitter:title" content={title ?? meta.twitterTitle ?? meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.twitter} />
      <meta name="twitter:creator" content={meta.twitter} />
      <meta
        name="twitter:image"
        content={image ? `${site.siteMetadata.siteUrl}${imageUrl}` : meta.twitterImage}
      />
      <meta name="twitter:image:alt" content={title ?? meta.twitterTitle ?? meta.title} />

      <meta name="theme-color" content="#1d334f" />
      <meta name="mobile-web-app-capable" content="yes" />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

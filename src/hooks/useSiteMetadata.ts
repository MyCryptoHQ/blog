import { graphql, useStaticQuery } from 'gatsby';

interface QueryData {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

/**
 * Get site metadata from the Gatsby config.
 *
 * @return {QueryData['site']['siteMetadata']} The site metadata.
 */
export const useSiteMetadata = (): QueryData['site']['siteMetadata'] => {
  const { site } = useStaticQuery<QueryData>(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

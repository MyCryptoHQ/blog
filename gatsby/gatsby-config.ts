import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: 'https://blog.mycrypto.com',
        contentApiKey: process.env.GHOST_API_KEY,
        version: 'v3'
      }
    }
  ]
};

export default config;

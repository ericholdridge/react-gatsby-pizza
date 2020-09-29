import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Dubuque, Iowa.`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // This is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        // The projectId is found at manage.sanity.io
        projectId: '4o0jwvqo',
        dataset: 'production',
        watchMode: true,
        // This hides the secret token
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

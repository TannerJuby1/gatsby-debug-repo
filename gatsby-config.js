module.exports = {
  siteMetadata: {
    title: `minimal`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/*`, `/fundraisers/*`]
      }
    }
  ]
}

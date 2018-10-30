module.exports = {
  siteMetadata: {
    title: "",
    author: "",
    description: ""
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        // background_color: '#663399',
        // theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://topaz.us19.list-manage.com/subscribe/post?u=cbf1647840bee56d07d569cbd&amp;id=38dcdfa724',
      },
    },
  ],
}

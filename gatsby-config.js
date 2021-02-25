/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  assetPrefix: '__GATSBY_RELATIVE_PATH__',
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-relative-paths',
  ],
  pathPrefix: "/my-awesome-project"
}

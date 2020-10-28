const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-typescript",
  {
    resolve: `gatsby-source-contentful`,
    options:{
      spaceId: "h20q4xecjw69",
      accessToken: "X9-TEZjikWPrnEjP2-yD099OxVS4QuTcSs9aXTPsPkY"
    }
  }
],
}

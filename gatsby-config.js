/** 
 * @type {import('gatsby').GatsbyConfig} 
 */ 

module.exports = {
    siteMetadata: {
      title: `assignment-5`,
      description: `Starter for Assignment 5`,
      course: `CSCI E-114`,
      siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-json`,
      `gatsby-transformer-remark`,
      
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1200,
        },  
      },
       
    ]
  };
  
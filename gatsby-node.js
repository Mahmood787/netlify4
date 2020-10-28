const {grapql} = require('gatsby')
var path = require('path')
exports.createPages =async({actions, graphql})=>{
    const {createPage}= actions
    const results = await graphql(`
        {
            allContentfulBlogPost {
                nodes {
                  createdAt
                  title
                  updatedAt
                  content {
                    json
                }
              }
        }
    }`)
    results.data.allContentfulBlogPost.nodes.forEach((obj)=>{
        createPage({
            path: `Products/${obj.title}`,
            component:path.resolve('src/template/Products.tsx'),
            context:{
                itemDetails: obj
            }
        })
    })
}
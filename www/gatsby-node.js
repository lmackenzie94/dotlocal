async function createPostPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      posts: allSanityPost {
        edges {
          node {
            id
            title
            slug {
              current
            }
            author {
              name
            }
            price
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.posts || {}).edges || []

  postEdges.forEach(edge => {
    const { id, slug = {} } = edge.node
    const path = `/posts/${slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createPostPages(graphql, actions)
}

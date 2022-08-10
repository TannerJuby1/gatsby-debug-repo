const createPages = async ({ actions }) => {
  const { createPage } = actions

  const fundraisers = [
    {
      slug: 'test-1',
      title: 'Test 1'
    },
    {
      slug: 'test-2',
      title: 'Test 2'
    },
    {
      slug: 'test-3',
      title: 'Test 3'
    },
    {
      slug: 'test-4',
      title: 'Test 4'
    },
    {
      slug: 'test-5',
      title: 'Test 5'
    }
  ]

  fundraisers.forEach((f) => {
    createPage({
      path: `fundraisers/${f.slug}`,
      component: require('path').resolve('src/pages/fundraiserTemplate.js'),
      context: f
    })
  })
}

module.exports = {
  createPages
}

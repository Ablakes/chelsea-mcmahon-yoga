import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <h2>Blog Posts</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(post => {
        return (
          <li key={data.allMarkdownRemark.edges.indexOf(post)}>
            <Link to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        )
      })}
    </ul>

    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/About/">Go to About</Link>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage

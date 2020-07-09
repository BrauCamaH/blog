import { useStaticQuery, graphql } from 'gatsby';

const useSpanishPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { lang: { eq: "en" } } }) {
        nodes {
          frontmatter {
            title
            author
            slug
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    autor: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }));
};

export default useSpanishPost;

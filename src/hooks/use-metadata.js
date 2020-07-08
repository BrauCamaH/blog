import { useStaticQuery, graphql } from 'gatsby';

const useMetaData = () => {
  const data = useStaticQuery(graphql`
    query {
      allSite {
        nodes {
          siteMetadata {
            title
            description
          }
        }
      }
    }
  `);

  const metadata = data.allSite.nodes[0].siteMetadata;
  return {
    title: metadata.title,
    description: metadata.description,
  };
};

export default useMetaData;

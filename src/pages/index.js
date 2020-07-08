import React from 'react';
import PostPreview from '../components/posts-preview';
import usePosts from '../hooks/use-posts';
import useMetadata from '../hooks/use-metadata';
import Layout from '../components/layout';

const App = () => {
  const posts = usePosts();
  const metadata = useMetadata();
  return (
    <Layout>
      <div>
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default App;

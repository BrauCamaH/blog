import React from 'react';
import { useTranslation, usePageContext } from '@3nvi/gatsby-theme-intl';

import PostPreview from '../components/posts-preview';
import useEnglishPost from '../hooks/use-english-posts';
import useSpanishPost from '../hooks/use-spanish-posts';
import Layout from '../components/layout';

const App = () => {
  const { lang } = usePageContext();
  const posts = lang == 'es' ? useSpanishPost() : useEnglishPost();
  const { t } = useTranslation();

  return (
    <Layout>
      <div>
        <h3>{t('info.about')}</h3>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default App;

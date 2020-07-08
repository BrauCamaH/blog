import React from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from '../components/read-link';
import PropTypes from 'prop-types';

const PostPreview = ({ post }) => {
  const { t } = useTranslation();
  return (
    <article
      css={css`
        margin-top: 0.75rem;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 0.5rem;
      `}
    >
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>{t('common.read')} &rarr;</ReadLink>
    </article>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object,
};

export default PostPreview;

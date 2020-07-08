import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { GitHub, Youtube, LinkedIn } from './social';

const Footer = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        grid-area: footer;
        background: ${theme.secondary};
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Youtube />
      <GitHub />
      <LinkedIn />
    </div>
  );
};

export default Footer;

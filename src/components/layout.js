import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import Navbar from './navbar';

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            background-color: ${theme.background};
            color: ${theme.text};
            font-size: 18px;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${theme.text};
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }
        `}
      />
      <Navbar />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 600px;
        `}
      >
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

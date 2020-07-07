import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import mq from '../util/breakpoints';

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
            font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
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
            font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }
        `}
      />
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 4fr 1fr;
          grid-template-areas:
            'navbar navbar navbar'
            '.   .  .'
            '. main .'
            '.   .  .';
          ${mq[1]} {
            grid-template-columns: 1fr 10fr 1fr;
          }
          ${mq[0]} {
            grid-template-columns: 1fr 16fr 1fr;
          }
        `}
      >
        <Navbar />
        <main
          css={css`
            grid-area: main;
          `}
        >
          {children}
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

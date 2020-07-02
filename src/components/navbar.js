import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { css } from '@emotion/core';

import Toggle from './toggle';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: ${(props) => props.theme.accent};
  font-size: 1rem;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid ${(props) => props.theme.secondary};
  }
`;

const Navbar = () => {
  const theme = useTheme();
  return (
    <nav
      css={css`
        background: ${theme.primary};
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      `}
    >
      <Link
        css={css`
          color: ${theme.accent};
          font-size: 1.2rem;
          margin: 0 0.5rem 0 0;
          padding: 0.25rem;
          text-decoration: none;
        `}
        to="/"
        activeClassName="current-page"
      >
        Braulio Camarena
      </Link>
      <div
        css={css`
          margin: 0 0.5rem 0 0;
          padding: 0.25rem;
        `}
      >
        <NavLink to="/about/" activeClassName="current-page">
          Acerca de
        </NavLink>
        <NavLink to="/contact/" activeClassName="current-page">
          Contacto
        </NavLink>
      </div>
      <Toggle />
    </nav>
  );
};

export default Navbar;

import React from 'react';
import styled from '@emotion/styled';
import { useTranslation, Link } from '@3nvi/gatsby-theme-intl';
import { useTheme } from 'emotion-theming';
import { css } from '@emotion/core';
import mq from '../util/breakpoints';

import Toggle from './toggle';
import MobileNav from './mobile-nav';

import profile from '../images/profile.jpg';

const NavLink = styled(Link)`
  color: ${(props) => props.theme.accent};
  font-size: 1rem;
  padding: 0.25rem;
  background: transparent;
  margin-left: 0.5rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid ${(props) => props.theme.secondary};
  }
  ${mq[1]} {
    display: none;
  }
`;

const Navbar = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <nav
      css={css`
        grid-area: navbar;
        background: ${theme.primary};
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem 0;
        .mobile-nav {
          display: none;
        }
        .mobile-nav {
          ${mq[1]} {
            display: block;
            visibility: visible;
          }
        }
      `}
    >
      <div>
        <img
          css={css`
            width: 50px;
            height: 50px;
            vertical-align: middle;
            border-radius: 50%;
            margin-right: 0.5rem;
            margin-left: 6rem;
            ${mq[1]} {
              margin-left: 1rem;
            }
            ${mq[0]} {
              display: none;
            }
          `}
          src={profile}
          alt="profile photo"
        />
        <Link
          css={css`
            color: ${theme.accent};
            font-size: 1.2rem;
            margin: 0 0.5rem 0 0;
            padding: 0.25rem;
            text-decoration: none;
            ${mq[0]} {
              padding: 0;
              margin: 0 0 0 0.5rem;
            }
          `}
          to="/"
          activeClassName="current-page"
        >
          Braulio Camarena
        </Link>
      </div>
      <div
        css={css`
          margin: 0 1rem 0 0;
          padding: 0.25rem;
        `}
      >
        <NavLink to="/blog/" activeClassName="current-page">
          {t('nav.blog')}
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          {t('nav.about')}
        </NavLink>
        <NavLink to="/contact/" activeClassName="current-page">
          {t('nav.contact')}
        </NavLink>
      </div>
      <Toggle
        css={css`
          margin-right: 6rem;
          ${mq[1]} {
            margin-right: 1rem;
          }
          ${mq[0]} {
            margin-right: 0;
          }
        `}
        className="dark-theme"
      />
      <MobileNav />
    </nav>
  );
};

export default Navbar;

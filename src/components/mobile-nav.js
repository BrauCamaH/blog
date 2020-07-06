import React, { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';

import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: ${(props) => props.theme.secondary};
  font-size: ${(props) => props};
  padding: 2rem;
  background: transparent;
  text-decoration: none;
`;

const Toggle = () => {
  const theme = useTheme();
  const color = 'white';
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);
  return (
    <div
      className="mobile-nav"
      css={css`
        margin-right: 15px;
        margin-left: 15px;
      `}
    >
      <button
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
        css={css`
          width: 30px;
          height: 40px;
          z-index: 30;
          top: -5px;
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={css`
            width: 24px;
            height: 2px;
            background: ${color};
            position: absolute;
            left: 0;
            ${isToggledOn ? 'background: transparent' : `background: ${color}`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
              content: '';
              top: -8px;
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? 'white' : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(45deg); top: 0; '
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            ::after {
              top: 8px;
              content: '';
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? 'white' : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(-45deg); top: 0;'
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>
      {isToggledOn && (
        <div
          css={css`
            position: absolute;
            z-index: 20;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: ${theme.primary};
          `}
        >
          <NavLink to="/about/" activeClassName="current-page">
            Blog
          </NavLink>
          <NavLink to="/contact/" activeClassName="current-page">
            Acerca
          </NavLink>
          <NavLink to="/contact/" activeClassName="current-page">
            Contacto
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Toggle;

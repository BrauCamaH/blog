import React from 'react';
import { css } from '@emotion/core';

const NotFound = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      `}
    >
      Not Found
    </div>
  );
};

export default NotFound;

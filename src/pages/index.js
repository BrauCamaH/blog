import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Layout from '../components/layout';
import { darkTheme, defaultTheme } from '../theme';

const App = () => {
  const [isDark] = useState(false);
  return (
    <ThemeProvider theme={isDark ? darkTheme : defaultTheme}>
      <Layout>
        <div>
          Hello
          <h1>This is my blog</h1>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

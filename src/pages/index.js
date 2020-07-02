import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Layout from '../components/layout';
import { darkTheme, defaultTheme } from '../theme';

const ThemeContext = React.createContext({
  isDark: false,
  setIsDark: () => {},
});

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeProvider theme={isDark ? darkTheme : defaultTheme}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Layout>
          <div>
            Hello
            <h1>This is my blog</h1>
          </div>
        </Layout>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export { ThemeContext };
export default App;

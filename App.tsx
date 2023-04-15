import 'react-native-gesture-handler';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { ThemeBTN, TextBTN } from './styleGlobal'

import Router from './src/routes/Routes';

import  light from './src/theme/light';
import dark from './src/theme/dark';

const app = () => {
  const [theme, setTheme] = useState(light);

  const hanldeTheme = () => {
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  }
  return (
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
  );
}
export default app;

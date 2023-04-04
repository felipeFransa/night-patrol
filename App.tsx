import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { ThemeBTN, TextBTN } from './styleGlobal'

import MainStack from './src/routes/stack.routes';

import  light from './src/theme/light';
import dark from './src/theme/dark';

const app = () => {
  const [theme, setTheme] = useState(dark)

  const hanldeTheme = () => {
    const newTheme = theme === dark ? light : dark;
    setTheme(newTheme);
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <MainStack />
        <ThemeBTN onPress={hanldeTheme}>
          <TextBTN>Tema</TextBTN>
        </ThemeBTN>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default app;

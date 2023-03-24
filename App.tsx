import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Button } from './styleGlobal'

import MainStack from './src/routes/stack.routes';

import  light from './src/theme/light';
import dark from './src/theme/dark';


const app = () => {
  const [theme, setTheme] = useState(light)

  const hanldeTheme = () => {
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <MainStack />
        <Button title='Tema' onPress={hanldeTheme} />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default app;

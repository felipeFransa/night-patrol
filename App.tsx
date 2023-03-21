import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { SignUp } from './src/screens/SignUp'
import { Loading } from './src/screens/loading';
import { Home } from './src/screens/Home';
import { Login } from  './src/screens/Login';
import { Button } from './style'

import  light from './src/theme/light';
import dark from './src/theme/dark';

const app = () => {
  const [theme, setTheme] = useState(light)

  const hanldeTheme = () => {
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <Button title='Tema' onPress={hanldeTheme} />
      
    </ThemeProvider>
  );
}

export default app;

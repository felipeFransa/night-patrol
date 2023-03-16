import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Loading } from './src/screens/loading';
import { Home } from './src/screens/Home';
import { Button } from './style'

import  light from './src/theme/light';
import dark from './src/theme/dark';

const app = () => {
  const [theme, setTheme] = useState(light)

  const hanldeTheme = () => {
    if(theme === light) {
      setTheme(dark)
    }else if (theme === dark) {
      setTheme(light)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <Button title='Tema' onPress={hanldeTheme} />
      <Home />
    </ThemeProvider>
  );
}

export default app;

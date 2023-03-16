import { ThemeProvider } from 'styled-components/native';
import { Loading } from './src/screens/loading';

import  light from './src/theme/light';

const app = () => {
  return (
    <ThemeProvider theme={light}>
      <Loading />
    </ThemeProvider>
  );
}

export default app;

import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from './src/context/Auth';
import * as Notifications from 'expo-notifications';
import { ThemeBTN, TextBTN } from './styleGlobal'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


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
     <AuthProvider>
       <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
     </AuthProvider>
  );
}
export default app;

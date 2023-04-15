import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/Auth';
import MainStack from './stack.routes';
import StackAuth from './Auth.routes';

const Router = () => {
  const [auth, setAuth] = useState(true);
  const {authData} = useAuth()

  return (
    <NavigationContainer>
      {authData ? <MainStack/> : <StackAuth/>}
    </NavigationContainer>
  )
};
export default Router;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/Auth';
import MainStack from './stack.routes';
import StackAuth from './Auth.routes';

import { Loading } from '../screens/loading';

const Router = () => {
  const {authData, loading } = useAuth();
  if(loading) {
    return (
      <Loading/>
    )
  }
  return (
    <NavigationContainer>
      {authData ? <MainStack/> : <StackAuth/>}
    </NavigationContainer>
  )
};
export default Router;
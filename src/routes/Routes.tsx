import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './stack.routes';
import StackAuth from './Auth.routes';

const Router = () => {
  const [auth, setAuth] = useState(true);

  return (
    <NavigationContainer>
      {auth ? <MainStack/> : <StackAuth/>}
    </NavigationContainer>
  )
};
export default Router;
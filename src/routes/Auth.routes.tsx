import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackAuth = createNativeStackNavigator();

import { SignUp } from '../screens/SignUp';
import { Login } from '../screens/Login';

export default () => {
  return (
    <StackAuth.Navigator>
      <StackAuth.Screen name='Login' component={Login}/>
      <StackAuth.Screen name='SignUp' component={SignUp}/>
    </StackAuth.Navigator>
  )
}
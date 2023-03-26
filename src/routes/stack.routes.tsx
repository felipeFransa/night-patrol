import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Toppings } from '../screens/Toppings';
import { SignUp } from '../screens/SignUp';
import { Loading } from '../screens/loading';
import { Home } from '../screens/Home';
import { Login } from  '../screens/Login';
import { Activities } from '../screens/Activities';

const MainStack = createNativeStackNavigator();

export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={Home} options={{ title: 'Inicio'}}/>
      <MainStack.Screen name='Toppings' component={Toppings}/>
      <MainStack.Screen name='Loading' component={Loading}/>
      <MainStack.Screen name='SignUp' component={SignUp}/>
      <MainStack.Screen name='Login' component={Login}/>
      <MainStack.Screen name='Activities' component={Activities}/>
    </MainStack.Navigator>
  );
}
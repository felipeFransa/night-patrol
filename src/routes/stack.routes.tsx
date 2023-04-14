import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Config } from '../screens/Configs';
import { Admin } from '../screens/Admin';
import { Clients } from '../screens/Clients';
import { About } from '../screens/About';
import { StartPatrol } from '../screens/StartPatrol';

import Tab from './tab.routes';

const MainStack = createNativeStackNavigator();

export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Tab" component={Tab} options={{
        headerShown: false
      }}/>
      <MainStack.Screen name="Home" component={Home}/>
      <MainStack.Screen name="Config" component={Config}/>
      <MainStack.Screen name="Admin" component={Admin}/>
      <MainStack.Screen name="Clients" component={Clients}/>
      <MainStack.Screen name="About" component={About}/>
      <MainStack.Screen name="StartPatrol" component={StartPatrol}/>
    </MainStack.Navigator>
  );
}
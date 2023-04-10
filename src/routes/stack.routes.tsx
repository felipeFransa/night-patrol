import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Config } from '../screens/Configs';
import { Admin } from '../screens/Admin';
import { Clients } from '../screens/Clients';
import { About } from '../screens/About';
import Tab from './tab.routes';

const MainStack = createNativeStackNavigator();

export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Tab" component={Tab} options={{
        headerShown: false
      }}/>
      <MainStack.Screen name="Config" component={Config}/>
      <MainStack.Screen name="Admin" component={Admin}/>
      <MainStack.Screen name="Clients" component={Clients}/>
      <MainStack.Screen name="About" component={About}/>
    </MainStack.Navigator>
  );
}
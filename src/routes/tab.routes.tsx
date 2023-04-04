import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Toppings } from '../screens/Toppings';

const Tab = createBottomTabNavigator();

export default () => {
 return (
  <Tab.Navigator>
  <Tab.Screen name="Home" component={Home}/>
  <Tab.Screen name="Toppings" component={Toppings}/>
  </Tab.Navigator>
 )
}
import React from "react";
import styled from "styled-components/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Toppings } from '../screens/Toppings';
import { Activities } from  '../screens/Activities';
import { Admin } from '../screens/Admin';
import { Config } from '../screens/Configs';

const Tab = createBottomTabNavigator();

const IMG = styled.Image`
  width: 24px;
  height: 24px;
`

export default () => {
 return (
  <Tab.Navigator screenOptions={({route})=>({
    tabBarIcon: ()=>{
      let imgSource = null;
      
      switch(route.name){
        case 'Home':
          imgSource = require('../assets/casa.png');
        break;
        case 'Notificações':
          imgSource = require('../assets/sino.png');
        break;
        case 'Map':
          imgSource = require('../assets/map.png');
        break;
        case 'Configurações':
          imgSource = require('../assets/config.png');
        break;
      }

      return <IMG source={imgSource}/>
    }
  })}>
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Notificações" component={Toppings}/>
    <Tab.Screen name="Map" component={Activities}/>
    <Tab.Screen name="Configurações" component={Config}/> 
  </Tab.Navigator>
 )
}
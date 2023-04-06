import React from "react";
import styled from "styled-components/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Toppings } from '../screens/Toppings';
import { Activities } from  '../screens/Activities';
import { Users } from '../screens/Admin';

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
        case 'Notificacoes':
          imgSource = require('../assets/notificacoes.png');
        break;
        case 'Atividades':
          imgSource = require('../assets/config.png');
        break;
        case 'Usuario':
          imgSource = require('../assets/retrato.png');
        break;
      }

      return <IMG source={imgSource}/>
    }
  })}>
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Notificacoes" component={Toppings}/>
    <Tab.Screen name="Atividades" component={Activities}/>
    <Tab.Screen name="Usuario" component={Users}/>
  </Tab.Navigator>
 )
}
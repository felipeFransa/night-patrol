import React from "react";
import { ScrollView } from 'react-native';
import * as C from './style';


export const Login = () => {
  return (
    <ScrollView>
      <C.Container>
        <C.ContainerForm>
          <C.Input>Teste</C.Input>
        </C.ContainerForm>
      </C.Container>
    </ScrollView>
  )
}
import React from "react";
import * as C from './style';


export const Login = () => {
  return (
      <C.Container>
        <C.ContainerLogo>
          <C.TextLogo>
            Seja Bem Vindo a Night Patrol!
          </C.TextLogo>
        </C.ContainerLogo>
        <C.ContainerForm>
          <C.InputArea>
            <C.TextArea>Email:</C.TextArea>
            <C.Input placeholder='Digite seu email' />
          </C.InputArea>
          <C.InputArea>
            <C.TextArea>Senha:</C.TextArea>
            <C.Input placeholder='Digite sua senha' />
          </C.InputArea>
          <C.Button title="Login"/>
        </C.ContainerForm>
        <C.ToRegister>
          Faca seu cadastro!
        </C.ToRegister>
      </C.Container>
  )
}
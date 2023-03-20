import React from "react";
import * as C from './style';


export const SignUp = () => {
  return (
      <C.Container>
        <C.ContainerLogo>
          <C.TextLogo>
            Faça seu cadastro na Night Patrol!
          </C.TextLogo>
        </C.ContainerLogo>
        <C.ContainerForm>
          <C.InputArea>
            <C.TextArea>Nome de Usuario:</C.TextArea>
            <C.Input placeholder='Digite seu nome' />
          </C.InputArea>
          <C.InputArea>
            <C.TextArea>Email:</C.TextArea>
            <C.Input placeholder='Digite seu email' />
          </C.InputArea>
          <C.InputArea>
            <C.TextArea>Senha:</C.TextArea>
            <C.Input placeholder='Digite sua senha' />
          </C.InputArea>
          <C.Button title="Cadastre-se"/>
        </C.ContainerForm>
        <C.ToLogin>
          Já possui conta, faça seu login!
        </C.ToLogin>
      </C.Container>
  )
}
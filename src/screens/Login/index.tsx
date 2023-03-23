import React, { useState, useEffect } from "react";
import * as C from './style';


export const Login = () => {

  const [loading, setLoading] = useState(false);
  const [permission, setPermission] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  

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
          <C.Button>
            <C.TextButton>Login</C.TextButton>
          </C.Button>
        </C.ContainerForm>
        {loading &&
          <C.BoxPermissions>
            <C.Permission>{permission}</C.Permission>
          </C.BoxPermissions>
        }
        <C.ToRegister>
          Faca seu cadastro!
        </C.ToRegister>
      </C.Container>
  )
}
import React, { useState, useEffect } from "react";
import * as C from './style';


export const Login = () => {

  const [status, setStatus] = useState(false);
  const [permission, setPermission] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleVerify = async () => {
    try {
      setStatus(!status);
      setPermission('Acesso Liberado!');
      setStatus(true);
    }catch(e) {
      setStatus(true);
      setPermission('Acesso Negado!')
    }
  }
  

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
            <C.Input placeholder='Digite seu email' value={email} onChangeText={t=>setEmail(t)} />
          </C.InputArea>
          <C.InputArea>
            <C.TextArea>Senha:</C.TextArea>
            <C.Input placeholder='Digite sua senha' value={password} secureTextEntry={true} onChangeText={t=>setPassword(t)} />
          </C.InputArea>
          <C.Button onPress={handleVerify}>
            <C.TextButton>Login</C.TextButton>
          </C.Button>
        </C.ContainerForm>
        {status  &&
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
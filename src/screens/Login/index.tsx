import React, { useState, useEffect } from "react";
import { Users } from '../../../api';
import { useAuth } from '../../context/Auth';
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import * as C from './style';

export type UserAdminProps = {
  _id: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  group?: string;
}
type Props = {
  data: UserAdminProps;
  onPress: () => void;
}

export const Login = () => {
  const {login} = useAuth();
  const [nameBD, setNameBD] = useState(`@${Users.firstName}:${Users.address}`);

  const [userAdmin, setUserAdmin] = useState<UserAdminProps>();
  const [permission, setPermission] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { getItem } = useAsyncStorage(nameBD);

  const handleGoToRegister = () => {
    navigation.navigate("SignUp")
  }
  useEffect(()=>{

  },[])

  const handleVerify = async () => {
    try {
      const response = await getItem()
      const user = response ? JSON.parse(response) : [];
      setUserAdmin(user);
      setPermission(true);
      console.log(user);
      alert('Apagados')
    }catch(e) {
      alert('Usuario não encontrado')
      setPermission(false)
    }
  }
  useEffect(()=>{
    
  },[])
  

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
          <C.Button title="Login" onPress={()=>login(email, password)} />
        </C.ContainerForm>
        <C.ButtonToRegister onPress={handleGoToRegister}>
          <C.ToRegister>
            Faca seu cadastro!
          </C.ToRegister>
        </C.ButtonToRegister>
      </C.Container>
  )
}
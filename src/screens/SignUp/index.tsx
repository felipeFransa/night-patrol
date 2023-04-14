import React, { useState }from "react";
import { Users } from '../../../api';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import * as C from './style';

export type UserAdminProps = {
  _id: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  grupo?: string;
}
type Props = {
  data: UserAdminProps;
  onPress: () => void;
}

export const SignUp = () => {
  const [nameBD, setNameBD] = useState(`@${Users.firstName}-${Users.address}`);
  const [userAdmin, setUserAdmin] = useState<UserAdminProps>();
  const [permission, setPermission] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { getItem } = useAsyncStorage(nameBD);

  const handleGoToRegister = () => {
    navigation.navigate("Login")
  }
  const newUserSignup = () => {
    try {
      const id = uuid.v4();
      
    }catch(error){
      console.log(error);
      alert('Não foi possível cadastro esse usuario')
    }
  }
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
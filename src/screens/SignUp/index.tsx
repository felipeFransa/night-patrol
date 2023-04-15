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
  gruop?: string;
}
type Props = {
  data: UserAdminProps;
  onPress: () => void;
}

export const SignUp = () => {
  const [nameBD, setNameBD] = useState(`@${Users.firstName}-${Users.address}`);
  const [userAdmin, setUserAdmin] = useState<UserAdminProps[]>([]);
  const [permission, setPermission] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const { setItem, getItem } = useAsyncStorage(nameBD);

  const handleGoToLogin = () => {
    navigation.navigate("Login")
  }
  const newUserSignup = async () => {
    try {
      const id = uuid.v4();
      const newEmail = email;
      const newPassword = password;
      const newAddress = address;
      const newPhoneNumber = phoneNumber;
      const newGroup = group;

      const newUser = {
        id: id,
        email: newEmail,
        password: newPassword,
        address: newAddress,
        phoneNumber: newPhoneNumber,
        group: newGroup
      }
      const response = await getItem()
      const user = response ? JSON.parse(response) : [];

      await setItem(JSON.stringify(user));
      setUserAdmin(user);
      console.log(user);
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
          <C.Button title="Cadastre-se" onPress={newUserSignup}/>
        </C.ContainerForm>
        <C.ButtonToLogin onPress={handleGoToLogin}>
          <C.ToLogin>
            Já possui conta, faça seu login!
          </C.ToLogin>
        </C.ButtonToLogin>
      </C.Container>
  )
}
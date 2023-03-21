import React, { useState} from "react";
import { SafeAreaView } from 'react-native';
import * as C from './style';

export const Home = () => {
  const [userName, setUserName] = useState('Felipe');
  const [userBairro, setUserBairro] = useState('Caicara')

  return (
    <SafeAreaView>
      <C.Container>
        <C.Header>
          <C.UsersInfonsBox>
            <C.TextUserName>{userName}</C.TextUserName>
            <C.TextUserAndress>{userBairro}</C.TextUserAndress>
          </C.UsersInfonsBox>
          <C.UsersPhotoBox>
            <C.AreaPhoto></C.AreaPhoto>
          </C.UsersPhotoBox>
        </C.Header>

       <C.BoxButton>
        <C.Button>
          <C.TextButton>Inicia!</C.TextButton>
        </C.Button>
        <C.Button>
          <C.TextButton>Fecha!</C.TextButton>
        </C.Button>
        <C.Button>
          <C.TextButton>Cobertura!</C.TextButton>
        </C.Button>
        <C.Button>
          <C.TextButton>Boas Vindas!</C.TextButton>
        </C.Button>
       </C.BoxButton>
    	  


      </C.Container>
    </SafeAreaView>
  )
}
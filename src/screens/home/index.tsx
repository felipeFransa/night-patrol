import React, { useState} from "react";
import { SafeAreaView } from 'react-native';
import { Container, TextUserName, Header, UsersInfonsBox, TextUserAndress, UsersPhotoBox, AreaPhoto} from './style';

export const Home = () => {
  const [userName, setUserName] = useState('Felipe');
  const [userBairro, setUserBairro] = useState('Caicara')

  return (
    <SafeAreaView>
     <Container>
        <Header>
          <UsersInfonsBox>
            <TextUserName>{userName}</TextUserName>
            <TextUserAndress>{userBairro}</TextUserAndress>
          </UsersInfonsBox>
          <UsersPhotoBox>
            <AreaPhoto></AreaPhoto>
          </UsersPhotoBox>
        </Header>
     </Container>
    </SafeAreaView>
  )
}
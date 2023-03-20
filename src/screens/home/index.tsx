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
            <C.UserBox>
              <C.UserName>
               {userName}
              </C.UserName>
            </C.UserBox>
            <C.UserBox>
              <C.UserBairro>
                {userBairro}
              </C.UserBairro>
            </C.UserBox>
          </C.UsersInfonsBox>
          <C.UsersPhotoBox>
            <C.AreaPhoto></C.AreaPhoto>
          </C.UsersPhotoBox>
        </C.Header>
      </C.Container>
    </SafeAreaView>
  )
}
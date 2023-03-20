import React from "react";
import { SafeAreaView } from 'react-native';
import * as C from './style';

export const Home = () => {
  return (
    <SafeAreaView>
      <C.Container>
        <C.UsersContainer>
          <C.UsersInfonsBox>
            <C.UserBox>
              <C.UserName>
                Felipe
              </C.UserName>
            </C.UserBox>
            <C.UserBox>
              <C.UserBairro>
                Caicara
              </C.UserBairro>
            </C.UserBox>
          </C.UsersInfonsBox>
          <C.UsersPhotoBox>
            <C.Text>Teste</C.Text>
          </C.UsersPhotoBox>
        </C.UsersContainer>
      </C.Container>
    </SafeAreaView>
  )
}
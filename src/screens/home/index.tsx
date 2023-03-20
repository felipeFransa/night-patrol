import React from "react";
import * as C from './style';

export const Home = () => {
  return (
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
         teste
        </C.UsersPhotoBox>
      </C.UsersContainer>
    </C.Container>
  )
}
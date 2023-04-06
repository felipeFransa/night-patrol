import React, { useState } from "react";
import * as C from './style';

export const Users = () => {
  const [firstName, setFirstName] = useState('Felipe');
  const [addresses, setAddresses] = useState('Caicara');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('31-9171228890');
  const [groups, setGroups] = useState('Falcao M.');
  
  return (
    <C.Container>
      <C.UserPhotoBox>
        <C.UserPhoto source={require('../../assets/retrato.png')}/>
      </C.UserPhotoBox>

      <C.UserBoxInfo>
        <C.UserInfo>
          <C.infoHeader>Name:</C.infoHeader>
          <C.infobody>{firstName}</C.infobody>
        </C.UserInfo>
        <C.UserInfo>
          <C.infoHeader>Bairro:</C.infoHeader>
          <C.infobody>{addresses}</C.infobody>
        </C.UserInfo>
        <C.UserInfo>
          <C.infoHeader>Numero:</C.infoHeader>
          <C.infobody>{phoneNumber}</C.infobody>
        </C.UserInfo>
        <C.UserInfo>
          <C.infoHeader>Grupo:</C.infoHeader>
          <C.infobody>{groups}</C.infobody>
        </C.UserInfo>
      </C.UserBoxInfo>
    </C.Container>
  )
}
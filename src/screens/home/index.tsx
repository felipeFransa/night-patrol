import React, { useState} from "react";
import { SafeAreaView } from 'react-native';
import * as C from './style';

export const Home = () => {
  const [userName, setUserName] = useState('Felipe');
  const [userBairro, setUserBairro] = useState('Caicara');
  const [sendPatrol, setSendPatrol] = useState(0)
  const [dateSendPatrol, setDateSendPatrol] = useState(0)

  

  const handleButtonSend = () => {
    setSendPatrol(sendPatrol + 1);
  }
  const handleDate = () => {
    let DateAtual = new Date();
    let newDate = DateAtual.getHours
    setDateSendPatrol(newDate);
  }

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
        <C.Button onPress={handleButtonSend}>
          <C.TextButton>Inicia!</C.TextButton>
          <C.TextButton>{`Rondas feitas ${sendPatrol}`}</C.TextButton>
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
       
      <C.BoxNotification>
        <C.TitleNotification>
          <C.TitleNotification>Ultimas chamadas</C.TitleNotification>
          <C.TextSecudary>Ver tudo!</C.TextSecudary>
        </C.TitleNotification>

        <C.NotificationBody>
          <C.LogoBodyNTF></C.LogoBodyNTF>
          <C.BodyNFT>
            <C.ContentBodyNFT>{`Ronda iniciada! ${sendPatrol}`}</C.ContentBodyNFT>
            <C.ContentBodyNFTDate>{`Hora de inicio da ronda ${dateSendPatrol}`}</C.ContentBodyNFTDate>
          </C.BodyNFT>
        </C.NotificationBody>
      </C.BoxNotification>

      </C.Container>
    </SafeAreaView>
  )
}
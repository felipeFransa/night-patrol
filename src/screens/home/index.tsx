import React from "react";
import { patrolNTF } from '../../../api';
import * as C from './style';

export const Home = () => {

  // const handleButtonSend = () => {
  //   setSendPatrol(sendPatrol + 1);
  // }
  // const handleDate = () => {
  //   let DateAtual = new Date();
  //   let newDate = `${DateAtual.getHours}`
  //   setDateSendPatrol(newDate);
  // }

  // const handleButtonSub = () => {
  //   setMadePatrol(madePatrol + 1);
    
  // }

  return (
      <C.Container>
        <C.Header>
          <C.UsersInfonsBox>
            <C.TextUserName>Felipe</C.TextUserName>
            <C.TextUserAndress>Caicara</C.TextUserAndress>
          </C.UsersInfonsBox>
          <C.UsersPhotoBox>
            <C.AreaPhoto source={require('../../assets/user-photo.png')}/>
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
       
      <C.BoxNotification>
        <C.NotificationTitle>
          <C.TitleNotification>Ultimas chamadas</C.TitleNotification>
          <C.TextSecudary>Ver tudo!</C.TextSecudary>
        </C.NotificationTitle>

        <C.BoxNotificationArea>
          {patrolNTF.map((item, index) =>(
            <C.NotificationBody key={index}>
            <C.LogoBodyNTF>
              <C.PatrolStart source={item.IMG}/>
            </C.LogoBodyNTF>
            <C.BodyNFT>
              <C.ContentBodyNFT>{item.text}</C.ContentBodyNFT>
              <C.ContentBodyNFTDate>{item.date}</C.ContentBodyNFTDate>
            </C.BodyNFT>
            <C.HoursBody>
              <C.HoursTxt>{item.hora}</C.HoursTxt>
            </C.HoursBody>
            </C.NotificationBody>
          ))}
          </C.BoxNotificationArea>
        </C.BoxNotification>
      </C.Container>
  )
}
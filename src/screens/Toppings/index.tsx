import React, { useState } from 'react';
import * as C from './style';

const imgStart = require('../../assets/ciclismo.png');
const imgStop = require('../../assets/patrolStop.png');

const Users = {
  firstName: 'Felipe',
  address: 'Caicara',
  phoneNumber: '31-9171228890',
}
const dateAtual = '06/04/2023'

const patrolNTF = [
  {local: Users.address, hora: '21:00', IMG: imgStart, text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '21:40', IMG: imgStop, text: 'Ronda Fechada!',  date: dateAtual},
  {local: Users.address, hora: '21:45', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '22:25', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
  {local: Users.address, hora: '23:30', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '00:00', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
]
 
export const Toppings = () => {

  return (
    <C.Container>

      <C.BoxNotification>
        <C.NotificationTitle>
          <C.TitleNotification>Ultimas chamadas</C.TitleNotification>
          <C.TextSecudary>Ver tudo!</C.TextSecudary>
        </C.NotificationTitle>

        <C.BoxNotificationArea>
            {patrolNTF.map((x, index) =>(
              <C.NotificationBody key={index}>
                <C.LogoBodyNTF>
                  <C.PatrolIMG source={x.IMG}/>
                </C.LogoBodyNTF>
                <C.BodyNFT>
                  <C.ContentBodyNFT>{x.text}</C.ContentBodyNFT>
                  <C.ContentBodyNFTDate>{x.date}</C.ContentBodyNFTDate>
                </C.BodyNFT>
                <C.HoursBody>
                  <C.HoursTxt>{x.hora}</C.HoursTxt>
                </C.HoursBody>
              </C.NotificationBody>
            ))}
        </C.BoxNotificationArea>
        
      </C.BoxNotification>

    </C.Container>
  )
}
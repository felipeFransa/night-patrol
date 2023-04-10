import React, { useState} from "react";
import { useNavigation } from '@react-navigation/native';
import * as C from './style';

export const Home = () => {
  const [userName, setUserName] = useState('Felipe');
  const [userBairro, setUserBairro] = useState('Caicara');
  const [sendPatrol, setSendPatrol] = useState(0);
  const [madePatrol, setMadePatrol] = useState(0);
  
  const [dateSendPatrol, setDateSendPatrol] = useState('00:00')

  const handleButtonSend = () => {
    setSendPatrol(sendPatrol + 1);
  }
  const handleDate = () => {
    let DateAtual = new Date();
    let newDate = `${DateAtual.getHours}`
    setDateSendPatrol(newDate);
  }

  const handleButtonSub = () => {
    setMadePatrol(madePatrol + 1);
    
  }

  return (
      <C.Container>
        <C.Header>
          <C.UsersInfonsBox>
            <C.TextUserName>{userName}</C.TextUserName>
            <C.TextUserAndress>{userBairro}</C.TextUserAndress>
          </C.UsersInfonsBox>
          <C.UsersPhotoBox>
            <C.AreaPhoto source={require('../../assets/user-photo.png')}/>
          </C.UsersPhotoBox>
        </C.Header>

       <C.BoxButton>
        <C.Button onPress={handleButtonSend}>
          <C.TextButton>Inicia!</C.TextButton>
        </C.Button>
        <C.Button>
          <C.TextButton onPress={handleButtonSub}>Fecha!</C.TextButton>
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

          <C.NotificationBody>
            <C.LogoBodyNTF>
              <C.PatrolStart source={require('../../assets/ciclismo.png')}/>
            </C.LogoBodyNTF>
            <C.BodyNFT>
              <C.ContentBodyNFT>{`Ronda iniciada! ${sendPatrol}`}</C.ContentBodyNFT>
              <C.ContentBodyNFTDate>{`Hora de inicio da ronda ${dateSendPatrol}`}</C.ContentBodyNFTDate>
            </C.BodyNFT>
            <C.HoursBody></C.HoursBody>
          </C.NotificationBody>
          
          <C.NotificationBody>
            <C.LogoBodyNTF>
              <C.PatrolStop source={require('../../assets/patrolStop.png')}/>
            </C.LogoBodyNTF>
            <C.BodyNFT>
              <C.ContentBodyNFT>{`Ronda concluida! ${madePatrol}`}</C.ContentBodyNFT>
              <C.ContentBodyNFTDate>{`Hora de inicio da ronda ${dateSendPatrol}`}</C.ContentBodyNFTDate>
            </C.BodyNFT>
            <C.HoursBody></C.HoursBody>
          </C.NotificationBody>

          <C.NotificationBody>
            <C.LogoBodyNTF>
              <C.PatrolStart source={require('../../assets/ciclismo.png')}/>
            </C.LogoBodyNTF>
            <C.BodyNFT>
              <C.ContentBodyNFT>{`Ronda iniciada! ${sendPatrol}`}</C.ContentBodyNFT>
              <C.ContentBodyNFTDate>{`Hora de inicio da ronda ${dateSendPatrol}`}</C.ContentBodyNFTDate>
            </C.BodyNFT>
            <C.HoursBody></C.HoursBody>
          </C.NotificationBody>

          <C.NotificationBody>
            <C.LogoBodyNTF>
              <C.PatrolStop source={require('../../assets/patrolStop.png')}/>
            </C.LogoBodyNTF>
            <C.BodyNFT>
              <C.ContentBodyNFT>{`Ronda concluida! ${madePatrol}`}</C.ContentBodyNFT>
              <C.ContentBodyNFTDate>{`Hora de inicio da ronda ${dateSendPatrol}`}</C.ContentBodyNFTDate>
            </C.BodyNFT>
            <C.HoursBody></C.HoursBody>
          </C.NotificationBody>
       
        </C.BoxNotificationArea>
        
      </C.BoxNotification>

      </C.Container>
  )
}
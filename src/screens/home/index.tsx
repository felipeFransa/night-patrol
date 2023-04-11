import React from "react";
import { patrolNTF, Users } from '../../../api';
import { useNavigation } from '@react-navigation/native';
import * as C from './style';

export const Home = () => {
  const navigation = useNavigation();

  const handleStartPatrol = () => {
    navigation.navigate("StartPatrol")
  }
  return (
      <C.Container>
        <C.Header>
          <C.UsersInfonsBox>
            <C.TextUserName>{Users.firstName}</C.TextUserName>
            <C.TextUserAndress>{Users.address}</C.TextUserAndress>
          </C.UsersInfonsBox>
          <C.UsersPhotoBox>
            <C.AreaPhoto source={require('../../assets/user-photo.png')}/>
          </C.UsersPhotoBox>
        </C.Header>

       <C.BoxButton>
        <C.Button onPress={handleStartPatrol}>
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
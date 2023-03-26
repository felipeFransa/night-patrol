import React, { useState} from "react";
import { useNavigation } from '@react-navigation/native'
import * as C from './style';

export const Home = () => {
  const [userName, setUserName] = useState('Felipe');
  const [userBairro, setUserBairro] = useState('Caicara');
  const [sendPatrol, setSendPatrol] = useState(0);
  const [madePatrol, setMadePatrol] = useState(0);

  const handleGoHome = () => {
    const navigation = useNavigation()
    navigation.navigate('Home')
  }
  const handleGoTopping = () => {
    const navigation = useNavigation()
    navigation.navigate("Toppings")
  }
  const handleGoActivities = () => {
    const navigation = useNavigation()
    navigation.navigate("Activities")
  }

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
            <C.AreaPhoto></C.AreaPhoto>
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

        <C.NotificationBody>
          <C.LogoBodyNTF></C.LogoBodyNTF>
          <C.BodyNFT>
            <C.ContentBodyNFT>{`Ronda iniciada! ${sendPatrol}`}</C.ContentBodyNFT>
            <C.ContentBodyNFTDate>{`Hora de inicio da ronda ${dateSendPatrol}`}</C.ContentBodyNFTDate>
          </C.BodyNFT>
           <C.HoursBody></C.HoursBody>
        </C.NotificationBody>

        <C.NotificationBody>
          <C.LogoBodyNTF></C.LogoBodyNTF>
          <C.BodyNFT>
            <C.ContentBodyNFT>{`Ronda concluida! ${madePatrol}`}</C.ContentBodyNFT>
            <C.ContentBodyNFTDate>{`Hora de inicio da ronda ${dateSendPatrol}`}</C.ContentBodyNFTDate>
          </C.BodyNFT>
           <C.HoursBody></C.HoursBody>
        </C.NotificationBody>

      </C.BoxNotification>

      <C.MenuPrimary>
        <C.Icons onPress={handleGoHome}></C.Icons>
        <C.Icons onPress={handleGoTopping}></C.Icons>
        <C.Icons onPress={handleGoActivities}></C.Icons>
        <C.Icons></C.Icons>
      </C.MenuPrimary>

      </C.Container>
  )
}
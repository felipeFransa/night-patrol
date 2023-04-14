import React, { useState, useCallback } from "react";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Users } from '../../../api';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import * as C from './style';

const IMG = require('../../assets/ciclismo.png');

export type CardProps = {
  _id: string;
  title: string;
  date: string;
  hours: string;
  newDate: Date
}
type Props = {
  data: CardProps;
  onPress: () => void;
}

export const Home = () => {
  const [data, setData] = useState<CardProps[]>([]);
  const [nameBD, setNameBD] = useState(`@${Users.firstName}-${Users.address}`);

  const navigation = useNavigation();
  const { getItem, removeItem } = useAsyncStorage(nameBD);

  const handleFetchNotifications = async () => {
    try {
      const response = await getItem()
      const data = response ? JSON.parse(response) : [];
      setData(data);
      console.log(data)
    }catch(err){
      console.log(err);
    }
  }
  const handleRemoveListNotifications = async () => {
    try {
      const response = await removeItem();
      console.log(response)
      alert('Mensagens deletadas')
    }catch(err) {
      alert('Erro ao delete Mensagens')
    }
  }
  useFocusEffect(useCallback(()=>{
   handleFetchNotifications()
  }, []));
  

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
        <C.Button onPress={handleRemoveListNotifications}>
          <C.TextButton>Delete</C.TextButton>
        </C.Button>
       </C.BoxButton>
       
      <C.BoxNotification>
        <C.NotificationTitle>
          <C.TitleNotification>Ultimas chamadas</C.TitleNotification>
          <C.TextSecudary>Ver tudo!</C.TextSecudary>
        </C.NotificationTitle>

        <C.BoxNotificationArea>
          {data.map((item, index) =>(
              <C.NotificationBody key={index}>
                <C.LogoBodyNTF>
                  <C.PatrolStart source={IMG}/>
                </C.LogoBodyNTF>
                <C.BodyNFT>
                  <C.ContentBodyNFT>{item.title}</C.ContentBodyNFT>
                  <C.ContentBodyNFTDate>{item.date}</C.ContentBodyNFTDate>
                </C.BodyNFT>
                <C.HoursBody>
                  <C.HoursTxt>{item.hours}</C.HoursTxt>
                </C.HoursBody>
              </C.NotificationBody>
            ))}
          </C.BoxNotificationArea>
        </C.BoxNotification>
      </C.Container>
  )
}
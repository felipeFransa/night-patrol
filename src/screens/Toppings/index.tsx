import React, { useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Users } from '../../../api';
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
 
export const Toppings = () => {
  const [data, setData] = useState<CardProps[]>([]);
  const [nameBD, setNameBD] = useState(`@${Users.firstName}-${Users.address}`);

  const { getItem } = useAsyncStorage(nameBD);

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
  useFocusEffect(useCallback(()=>{
    handleFetchNotifications()
   }, []));

  return (
    <C.Container>

      <C.BoxNotification>
        <C.NotificationTitle>
          <C.TitleNotification>Ultimas chamadas</C.TitleNotification>
          <C.TextSecudary>Ver tudo!</C.TextSecudary>
        </C.NotificationTitle>

        <C.BoxNotificationArea>
            {data.map((item, index) =>(
              <C.NotificationBody key={index}>
                <C.LogoBodyNTF>
                  <C.PatrolIMG source={IMG}/>
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
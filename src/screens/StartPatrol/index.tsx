import React, { useState } from 'react';
import { Users } from '../../../api';
import uuid from 'react-native-uuid';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import * as c from './style';

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


export const StartPatrol = () => {
  const [data, setData] = useState<CardProps[]>([]);
  const [nameBD, setNameBD] = useState(`@${Users.firstName}-${Users.address}`);
  const [start, setStart] = useState(false);
  const [called, setCalled] = useState(false);

  const { getItem, setItem } = useAsyncStorage(nameBD);

  const HandleNewPatrol = async () => {
    try {
    const id = uuid.v4();
    const Data = new Date();
    const Day = `${Data.getDate()}/${Data.getDay()}/${Data.getFullYear()}`;
    const Hours = `${Data.getHours()}:${Data.getMinutes()}`;

    const newStartPatrol = {
      id: id,
      title: 'Ronda Iniciada',
      date: Day,
      hours: Hours,
      newDate: new Date()
    }
    const response = await getItem();
    const previonsData = response ? JSON.parse(response) : [];

    const data = [...previonsData, newStartPatrol];

    await setItem(JSON.stringify(data));
    setData(data)
    console.log(newStartPatrol);
    alert('Ronda Iniciada com Sucesso!')
  } catch (err) {
    console.log(err);
    alert('Erro ao inciar ronda, tenta novamente')
  }
  }

  return (
    <c.Container>
      {!start && 
        <c.ContainerSP>
          <c.BoxText>
            <c.Text>{Users.address}</c.Text>
          </c.BoxText>
          <c.BoxText>
            <c.Text>{}</c.Text>
          </c.BoxText>
          <c.BoxText>
            <c.Text>{}</c.Text>
          </c.BoxText>
        </c.ContainerSP>
      }

      <c.BoxStartNotification>
        <c.MSGStartNotification>
          <c.MSGStart></c.MSGStart>
        </c.MSGStartNotification>
        {called &&
        <c.MSGStartNotification>
          <c.MSGStart></c.MSGStart>
        </c.MSGStartNotification>
         }
        <c.MSGStartNotification>
          <c.MSGStart></c.MSGStart>
        </c.MSGStartNotification>
      {!start && 
        <c.BTNSend onPress={HandleNewPatrol}>
          <c.BTNText>Iniciar</c.BTNText>
        </c.BTNSend>
      }
      </c.BoxStartNotification>
      {start && 
        <c.BoxStartNotification>
          <c.BTNSendRED onPress={()=>setCalled(true)}>
            <c.BTNText>Pausa Ronda</c.BTNText>
          </c.BTNSendRED>
          <c.BTNSendGREEN>
            <c.BTNText>Concluir Ronda</c.BTNText>
          </c.BTNSendGREEN>

        </c.BoxStartNotification>
      }
     
    </c.Container>
  )
}
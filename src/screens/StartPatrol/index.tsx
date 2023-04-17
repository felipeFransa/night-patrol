import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { Users } from '../../../api';
import uuid from 'react-native-uuid';
import { StackActions, useNavigation } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import * as C from './style';

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
  const [stopBTN, setStopBTN] = useState(true);
  const [pauseBTN, setPauseBTN] = useState(true);
  const [pauseStart, setPauseStart] = useState(true);

  const { getItem, setItem } = useAsyncStorage(nameBD);
  const navigation = useNavigation();

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
    alert('Ronda Iniciada com Sucesso!');
    setStart(true);
    setPauseStart(false);
  } catch (err) {
    console.log(err);
    alert('Erro ao inciar ronda, tenta novamente')
  }
  }
  const HandlePausePatrol = async () => {
    try {
    const id = uuid.v4();
    const Data = new Date();
    const Day = `${Data.getDate()}/${Data.getDay()}/${Data.getFullYear()}`;
    const Hours = `${Data.getHours()}:${Data.getMinutes()}`;

    const newStartPatrol = {
      id: id,
      title: 'Em Cobertura',
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
    alert('Ronda Pausada');
    setPauseBTN(false);
    setPauseStart(true);
    setStopBTN(false);
  } catch (err) {
    console.log(err);
    alert('Erro ao concluir ronda, tenta novamente')
  }
  }
  const HandlePauseStartPatrol = async () => {
    try {
    const id = uuid.v4();
    const Data = new Date();
    const Day = `${Data.getDate()}/${Data.getDay()}/${Data.getFullYear()}`;
    const Hours = `${Data.getHours()}:${Data.getMinutes()}`;

    const newStartPatrol = {
      id: id,
      title: 'Ronda retomada',
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
    alert('Ronda Pausada');
    setPauseBTN(true);
    setPauseStart(false);
    setStopBTN(true);
  } catch (err) {
    console.log(err);
    alert('Erro ao concluir ronda, tenta novamente')
  }
  }
  const HandleStopPatrol = async () => {
    try {
    const id = uuid.v4();
    const Data = new Date();
    const Day = `${Data.getDate()}/${Data.getDay()}/${Data.getFullYear()}`;
    const Hours = `${Data.getHours()}:${Data.getMinutes()}`;

    const newStartPatrol = {
      id: id,
      title: 'Ronda concluida',
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
    alert('Ronda concluida com sucesso!');
    navigation.dispatch(StackActions.popToTop())
  } catch (err) {
    console.log(err);
    alert('Erro ao concluir ronda, tenta novamente')
  }
  }

  return (
    <C.Container>
      <MapView />
      <C.BoxStartNotification>
      {!start && 
        <C.BTNSend onPress={HandleNewPatrol}>
          <C.BTNText>Iniciar</C.BTNText>
        </C.BTNSend>
      }
      </C.BoxStartNotification>
      {start &&
        <C.BoxStartNotification>
          {pauseBTN && 
          <C.BTNSendRED onPress={HandlePausePatrol}>
            <C.BTNText>Pausa Ronda</C.BTNText>
          </C.BTNSendRED>
          }
          {pauseStart && 
          <C.BTNSend onPress={HandlePauseStartPatrol}>
            <C.BTNText>Retoma Ronda</C.BTNText>
          </C.BTNSend>
          }
          {stopBTN && 
          <C.BTNSendGREEN onPress={HandleStopPatrol}>
            <C.BTNText>Concluir Ronda</C.BTNText>
          </C.BTNSendGREEN>
          }
        </C.BoxStartNotification>
      }
      
    </C.Container>
  )
}
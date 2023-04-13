import React, { useState, useEffect} from 'react';
import { Users } from '../../../api';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as c from './style';

export const StartPatrol = () => {
  const [nameBD, setNameBD] = useState(`@${Users.firstName}-${Users.address}`);
  const [start, setStart] = useState(false);
  const [called, setCalled] = useState(false);

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
    await AsyncStorage.setItem(nameBD, JSON.stringify(newStartPatrol));
    console.log(newStartPatrol);
    alert('Ronda Iniciada com Sucesso!')
  } catch (err) {
    console.log(err);
    alert('Erro ao inciar ronda, tenta novamente')
  }
  }

  useEffect(()=>{
   
  },[])

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
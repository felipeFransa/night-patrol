import React, { useState, useEffect} from 'react';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as c from './style';

export const StartPatrol = () => {
  const [userAdmin, setUserAdmin] = useState('Felipe');
  const [userAddress, setUserAddress] = useState('Caiçaras');
  const [nameBD, setNameBD] = useState(`${userAdmin}-${userAddress}`);
  const [start, setStart] = useState(false);
  const [called, setCalled] = useState(false);

  const HandleNewPatrol = async () => {
    const id = uuid.v4();
    const Data = new Date();
    const Day = `${Data.getDate()}/${Data.getDay()}/${Data.getFullYear()}`;
    const Hours = `${Data.getHours()}:${Data.getMinutes()}`;


    const newStartPatrol = {
      _id: id,
      title: 'Ronda Iniciada',
      data: Day,
      horas: Hours,
      newDate: new Date()
    }

    await AsyncStorage.setItem(nameBD, JSON.stringify(newStartPatrol));

    console.log(newStartPatrol);

    Toast.show({
      type: 'success',
      text1: 'Ronda Iniciada'
    });
  }

  useEffect(()=>{
   
  },[])

  return (
    <c.Container>
      {!start && 
        <c.ContainerSP>
          <c.BoxText>
            <c.Text>{userAddress}</c.Text>
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
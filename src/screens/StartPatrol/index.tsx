import React, { useState, useEffect} from 'react';
import * as c from './style';

export const StartPatrol = () => {
  const [localization, setLocation] = useState('Caicaira');
  const [hours, setHours] = useState('');
  const [date, setDate] = useState('')

  const handleNewDate = () => {
    const data = new Date();
    const NewDate = `${data.getUTCDate()}/${data.getUTCDay()}/${data.getUTCFullYear()}`
    const NewHours = `${data.getHours()}:${data.getUTCMinutes()}`;
    setHours(NewHours)
    setDate(NewDate);
  }
  useEffect(()=>{
    handleNewDate();
  },[])

  return (
    <c.Container>
      <c.ContainerSP>
        <c.BoxText>
          <c.Text>{localization}</c.Text>
        </c.BoxText>
        <c.BoxText>
          <c.Text>{hours}</c.Text>
        </c.BoxText>
        <c.BoxText>
          <c.Text>{date}</c.Text>
        </c.BoxText>
      </c.ContainerSP>

      <c.BoxStartNotification>
        <c.MSGStartNotification>
          <c.MSGStart>Ronda iniciada as {hours} do dia {date} em  {localization}</c.MSGStart>
        </c.MSGStartNotification>
        <c.BTNSend>
          <c.BTNText>Enviar!</c.BTNText>
        </c.BTNSend>
      </c.BoxStartNotification>
    </c.Container>
  )
}
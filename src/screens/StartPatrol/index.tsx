import React, { useState} from 'react';
import * as c from './style';

export const StartPatrol = () => {
  const [localization, setLocation] = useState('Caicaira');
  const [hours, setHours] = useState('22:00');
  const [date, setDate] = useState('11/04/2023')

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
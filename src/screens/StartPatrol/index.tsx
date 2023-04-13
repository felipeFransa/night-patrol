import React, { useState, useEffect} from 'react';
import * as c from './style';

export const StartPatrol = () => {
  const [localization, setLocation] = useState('Caicaira');
  const [hours, setHours] = useState('');
  const [date, setDate] = useState('');
  const [start, setStart] = useState(false);
  const [patrolStart, setPatrolStart] = useState('')
  const [called, setCalled] = useState(false);

  const handleNewDate = () => {
    const data = new Date(Date.now());
    const NewDate = `${data.getUTCDate()}/${data.getUTCDay()}/${data.getUTCFullYear()}`
    const NewHours = `${data.getHours()}:${data.getMinutes()}`;
    setHours(NewHours)
    setDate(NewDate);
    setPatrolStart(`Ronda iniciada as ${hours} do dia ${date} em  ${localization}`);
  }
  useEffect(()=>{
    handleNewDate();
  },[])

  return (
    <c.Container>
      {!start && 
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
      }

      <c.BoxStartNotification>
        <c.MSGStartNotification>
          <c.MSGStart>{patrolStart}</c.MSGStart>
        </c.MSGStartNotification>
        {called &&
        <c.MSGStartNotification>
          <c.MSGStart>Cobertura as {hours}.</c.MSGStart>
        </c.MSGStartNotification>
         }
        <c.MSGStartNotification>
          <c.MSGStart></c.MSGStart>
        </c.MSGStartNotification>
      {!start && 
        <c.BTNSend>
          <c.BTNText onPress={()=>setStart(true)}>Iniciar</c.BTNText>
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
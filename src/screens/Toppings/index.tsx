import React, { useState } from 'react';
import * as C from './style';
import { patrolNTF, PatrolNTF } from '../../../api';
 
export const Toppings = () => {
  const [loadBreakPatrol, setLoadBreakPatrol] = useState(false)

  return (
    <C.Container>

      <C.BoxNotification>
        <C.NotificationTitle>
          <C.TitleNotification>Ultimas chamadas</C.TitleNotification>
          <C.TextSecudary>Ver tudo!</C.TextSecudary>
        </C.NotificationTitle>

        <C.BoxNotificationArea>
          {/* {PatrolNTF.map((item, index) =>(
            <C.NotificationBody key={index}>
              <C.LogoBodyNTF>
                <C.PatrolIMG source={item.IMG}/>
              </C.LogoBodyNTF>

              <C.BodyNFT>
                <C.StagesNFT>
                  <C.ContentBodyNFT>Ronda Iniciada as {item.hoursStart}</C.ContentBodyNFT>
                  <C.ContentBodyNFTDate>{item.date} localizacão {item.localStart}</C.ContentBodyNFTDate>
                </C.StagesNFT>
                <C.StagesNFT>
                  <C.ContentBodyNFT>Ronda finalizada as {item.hoursStop}</C.ContentBodyNFT>
                  <C.ContentBodyNFTDate>{item.date} localizacão {item.localStop}</C.ContentBodyNFTDate>
                </C.StagesNFT>
              </C.BodyNFT>
              
              <C.HoursBody>
                <C.HoursTxt>{item.hoursStop}</C.HoursTxt>
              </C.HoursBody>
            </C.NotificationBody>
          ))} */}




            {patrolNTF.map((x, index) =>(
              <C.NotificationBody key={index}>
                <C.LogoBodyNTF>
                  <C.PatrolIMG source={x.IMG}/>
                </C.LogoBodyNTF>
                <C.BodyNFT>
                  <C.ContentBodyNFT>{x.text}</C.ContentBodyNFT>
                  <C.ContentBodyNFTDate>{x.date}</C.ContentBodyNFTDate>
                </C.BodyNFT>
                <C.HoursBody>
                  <C.HoursTxt>{x.hora}</C.HoursTxt>
                </C.HoursBody>
              </C.NotificationBody>
            ))}

        </C.BoxNotificationArea>
        
      </C.BoxNotification>

    </C.Container>
  )
}
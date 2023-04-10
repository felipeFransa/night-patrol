import React from 'react';
import * as C from './style';
import { patrolNTF } from '../../../api';
 
export const Toppings = () => {

  return (
    <C.Container>

      <C.BoxNotification>
        <C.NotificationTitle>
          <C.TitleNotification>Ultimas chamadas</C.TitleNotification>
          <C.TextSecudary>Ver tudo!</C.TextSecudary>
        </C.NotificationTitle>

        <C.BoxNotificationArea>
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
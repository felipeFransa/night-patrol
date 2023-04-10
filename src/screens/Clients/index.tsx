import React from 'react';
import * as C from './style';
import { UserClients } from '../../../api';

export const Clients = () => {
  return (
    <C.Container>
      <C.ContainerClients>
        {UserClients.map((item, index) =>(
          <C.BoxClient key={index}>
            <C.BoxIMGClient>
              <C.IMGClient source={item.IMGClient}/>
            </C.BoxIMGClient>
            <C.BoxInfos>
              <C.ClientText>{item.name}</C.ClientText>
            </C.BoxInfos>
            <C.BoxInfoAddress>
              <C.ClientText>{item.bairro}</C.ClientText>
              <C.ClientText>{item.casa}</C.ClientText>
            </C.BoxInfoAddress>
          </C.BoxClient>
        ))}
      </C.ContainerClients>
    </C.Container>
  )
}
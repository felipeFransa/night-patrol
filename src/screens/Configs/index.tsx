import React from 'react';
import * as C from './style';

export const Config = () => {
  return (
    <C.Container>
      <C.BodyConfig>

        <C.ConfigBox>
          <C.BoxIMGConfig>
            <C.IMGConfig source={require('../../assets/retrato.png')}/> 
          </C.BoxIMGConfig>
          <C.BoxText>
            <C.TextConfig>Perfil</C.TextConfig>
          </C.BoxText>
          <C.BoxArrow>
            <C.IMGArrowConfig source={require('../../assets/arrow.png')}/>
          </C.BoxArrow>
        </C.ConfigBox>

        <C.ConfigBox>
          <C.BoxIMGConfig>
            <C.IMGConfig source={require('../../assets/sino.png')}/> 
          </C.BoxIMGConfig>
          <C.BoxText>
            <C.TextConfig>Notifications</C.TextConfig>
          </C.BoxText>
          <C.BoxArrow>
            <C.IMGArrowConfig source={require('../../assets/arrow.png')}/>
          </C.BoxArrow>
        </C.ConfigBox>

        <C.ConfigBox>
          <C.BoxIMGConfig>
            <C.IMGConfig source={require('../../assets/clients.png')}/> 
          </C.BoxIMGConfig>
          <C.BoxText>
            <C.TextConfig>Clientes</C.TextConfig>
          </C.BoxText>
          <C.BoxArrow>
            <C.IMGArrowConfig source={require('../../assets/arrow.png')}/>
          </C.BoxArrow>
        </C.ConfigBox>

      </C.BodyConfig>
    </C.Container>
  )
}
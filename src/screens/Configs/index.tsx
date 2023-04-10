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
            <C.TextConfig>Notificações</C.TextConfig>
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

        <C.ConfigBox>
          <C.BoxIMGConfig>
            <C.IMGConfig source={require('../../assets/interrogatorio.png')}/> 
          </C.BoxIMGConfig>
          <C.BoxText>
            <C.TextConfig>Sobre</C.TextConfig>
          </C.BoxText>
          <C.BoxArrow>
            <C.IMGArrowConfig source={require('../../assets/arrow.png')}/>
          </C.BoxArrow>
        </C.ConfigBox>

        <C.BoxLogout>
          <C.BTNLogoutBox>
            <C.BTNLogoutIMG source={require('../../assets/sair.png')}/>
            <C.BTNLogoutText>Sair</C.BTNLogoutText>
          </C.BTNLogoutBox>
        </C.BoxLogout>


      </C.BodyConfig>
    </C.Container>
  )
}
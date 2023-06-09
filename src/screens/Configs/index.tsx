import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/Auth';
import * as C from './style';

export const Config = () => {
  const navigation = useNavigation();
  const {signOut} = useAuth();

  const handlePerfil = () => {
    navigation.navigate("Admin")
  }
  const handleClient = () => {
    navigation.navigate("Clients")
  }
  const handleAbout = () => {
    navigation.navigate("About")
  }

  return (
    <C.Container>
      
      <C.BodyConfig>

        <C.ConfigBox onPress={handlePerfil}>
          <C.BoxIMGConfig >
            <C.IMGConfig source={require('../../assets/user.png')}/> 
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
            <C.IMGConfig source={require('../../assets/grupo.png')}/> 
          </C.BoxIMGConfig>
          <C.BoxText>
            <C.TextConfig>Grupo</C.TextConfig>
          </C.BoxText>
          <C.BoxArrow>
            <C.IMGArrowConfig source={require('../../assets/arrow.png')}/>
          </C.BoxArrow>
        </C.ConfigBox>

        <C.ConfigBox onPress={handleClient}>
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

        <C.ConfigBox onPress={handleAbout}>
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
          <C.BTNLogoutBox onPress={()=>signOut()}>
            <C.BTNLogoutIMG source={require('../../assets/sair.png')}/>
            <C.BTNLogoutText>Sair</C.BTNLogoutText>
          </C.BTNLogoutBox>
        </C.BoxLogout>


      </C.BodyConfig>
    </C.Container>
  )
}
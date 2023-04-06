import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const UserPhotoBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
`
export const UserPhoto = styled.Image`
  width: 200px;
  height: 200px;
`

export const UserBoxInfo = styled.View`
  display: flex;
  justify-content: flex;
  align-items: center;
  width: 250px;
  height: 250px;
`
export const UserInfo = styled.View`
  width: 250px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
export const infoHeader = styled.Text`
  font-size: 16px;
  color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`
export const infobody = styled.Text`
  font-size: 16px;
  color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`
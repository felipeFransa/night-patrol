import styled from "styled-components/native";

export const Container = styled.View`
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: space-between;
`

export const UsersInfonsBox = styled.View`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const UserBox = styled.View`
  color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 20px;
`
export const NameText = styled.Text`
  font-size: 30px;
  color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`

export const BairroText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`


export const UsersPhotoBox = styled.View`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const AreaPhoto = styled.View`
  width: 80px;
  height: 80px; 
  border-radius: 10px;
  background: ${({theme})=>theme.COLORS.TEXT_PRIMARY};
  border: 1px solid ${({theme})=>theme.COLORS.TEXT_SECONDARY};
`
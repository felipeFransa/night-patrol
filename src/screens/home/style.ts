import styled from "styled-components/native";

export const Container = styled.View`
  
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const UsersContainer = styled.View`
  display: flex;
  width: 310px;
  height: 60px;
  justify-content: space-between;
`

export const UsersInfonsBox = styled.View`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: start;
`

export const UserBox = styled.View`
  width: 50%;
  height: 50%;
`
export const UserName = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`
export const UserBairro = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`

export const Text = styled.Text`
  font-size: 30px;
  color: ${( { theme } ) => theme.COLORS.TEXT_PRIMARY};
`
export const UsersPhotoBox = styled.View`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
`
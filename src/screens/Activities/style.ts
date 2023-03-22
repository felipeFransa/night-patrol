import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme})=>theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const BoxText = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 320px;
  height: 60px;
`
export const Text = styled.Text`
  font-size: 20px;
  color: ${({theme})=>theme.COLORS.TEXT_PRIMARY};
`

export const NotificationBox = styled.View`
  width: 320px;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

export const Notification = styled.View`
  width: 320px;
  height: 80px;
  background: ${({theme})=>theme.COLORS.TEXT_SECONDARY};
  border-radius: 20px;
`

export const MenuPrimary = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 320px;
  height: 80px;
  border-radius: 20px;;
  background: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`
export const Icons = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 10px;
`
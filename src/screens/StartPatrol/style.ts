import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const ContainerSP = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 320px;
  height: auto;
  background: ${( { theme } ) => theme.COLORS.PRIMARY_900};
  border-radius: 10px;
`
export const BoxText = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  width: 280px;
  height: 60px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Text = styled.Text`
  font-size: 36px;
  color: ${({theme})=>theme.COLORS.TEXT_PRIMARY};
`
export const BoxStartNotification = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background: ${({theme})=>theme.COLORS.BACKGROUND};
  width: 320px;
  height: auto;
`
export const MSGStartNotification = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme})=>theme.COLORS.PRIMARY_900};
  border-radius: 10px;
  width: 280px;
  height: 100px;
  margin-bottom: 20px;
`
export const MSGStart = styled.Text`
  color: ${({theme})=>theme.COLORS.TEXT_PRIMARY};
  font-size: 18px;
`
export const BTNSend = styled.TouchableOpacity`
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme})=>theme.COLORS.PRIMARY_900};
  border-radius: 10px;
  width: auto;
  height: auto;
`
export const BTNText = styled.Text`
  padding: 10px;
  color: ${({theme})=>theme.COLORS.BACKGROUND};
  font-size: 30px;
`
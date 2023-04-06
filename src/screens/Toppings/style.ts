import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme})=>theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const BoxNotification = styled.View`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const BoxNotificationArea = styled.ScrollView`
`

export const NotificationTitle = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const TitleNotification = styled.Text`
  font-size: 16px;
  color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`
export const TextSecudary = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`

export const NotificationBody = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const LogoBodyNTF = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`
export const PatrolIMG = styled.Image`
  width: 32px;
  height: 32px;
`
export const BodyNFT = styled.View`
  display: flex;
  flex-direction: column;
`
export const ContentBodyNFT = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`
export const ContentBodyNFTDate = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`
export const HoursBody = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const HoursTxt = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`
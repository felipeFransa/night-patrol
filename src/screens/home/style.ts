import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: space-around;
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

export const TextUserName = styled.Text`
  font-size: 30px;
  color: ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`

export const TextUserAndress = styled.Text`
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
export const AreaPhoto = styled.Image`
  width: 80px;
  height: 80px; 
`
export const BoxButton = styled.View`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px; 
  height: 50px;
  background: ${({ theme}) => theme.COLORS.TEXT_SECONDARY};
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`
export const TextButton = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
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
  width: 300px;
  height: 300px;
`

export const NotificationTitle = styled.View`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  border-radius: 10px;
  margin-top: 5px;
`

export const LogoBodyNTF = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`
export const PatrolStart = styled.Image`
  width: 32px;
  height: 32px;
`
export const PatrolStop = styled.Image`
  width: 32px;
  height: 32px;
`
export const BodyNFT = styled.View`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
  width: 50px;
  height: 30px;
`
export const HoursTxt = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme})=>theme.COLORS.BACKGROUND};
`

export const NotificationBox = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Notification = styled.View`
  width: 320px;
  height: 80px;
  background: ${({theme})=>theme.COLORS.TEXT_SECONDARY};
  border-radius: 20px;
`
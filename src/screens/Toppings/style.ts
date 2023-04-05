import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme})=>theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const ToppingsBox = styled.View`
  width: 320px;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

export const Toppings = styled.View`
  width: 320px;
  height: 50px;
  background: ${({theme})=>theme.COLORS.TEXT_SECONDARY};
  border-radius: 20px;
`
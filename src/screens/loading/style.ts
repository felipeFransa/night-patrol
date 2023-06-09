import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: center;
`
export const Text = styled.Text`
  font-size: 30px;
  color: ${( { theme } ) => theme.COLORS.TEXT_PRIMARY}
`
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const MainAbout = styled.ScrollView`
  width: 320px;
  height: 600px;
`
export const About = styled.Text`
  font-size: 16px;
  color: ${( { theme } ) => theme.COLORS.TEXT_PRIMARY};
`
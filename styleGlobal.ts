import styled from "styled-components/native";

export const Button = styled.Button`
  width: 50px; 
  height: 50px;
  background: ${({ theme}) => theme.COLORS.PRIMARY_600};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`
export const ThemeBTN = styled.TouchableOpacity`
  width: 50px; 
  height: 50px;
  background: ${({ theme}) => theme.COLORS.TEXT_SECONDARY};
`

export const TextBTN = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
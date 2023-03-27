import styled from "styled-components/native";

export const ThemeBTN = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px; 
  height: 50px;
  border-radius: 20px;
  background: ${({ theme}) => theme.COLORS.TEXT_SECONDARY};
`

export const TextBTN = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
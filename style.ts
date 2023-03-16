import styled from "styled-components/native";

export const Button = styled.Button`
  width: 100px; 
  height: 50px;
  background-color: ${({ theme}) => theme.COLORS.PRIMARY_600},
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`
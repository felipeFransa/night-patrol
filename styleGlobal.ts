import styled from "styled-components/native";

export const Button = styled.Button`
  width: 50px; 
  height: 50px;
  background: ${({ theme}) => theme.COLORS.PRIMARY_600};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`
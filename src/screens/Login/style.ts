import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.COLORS.BACKGROUND};
  justify-content: center;
  align-items: center;
`
export const ContainerLogo = styled.View`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`

export const TextLogo = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
`

export const ContainerForm = styled.View`
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
`
export const InputArea = styled.View`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const TextArea = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`

export const Input = styled.TextInput`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  text-align: center;
  width: 300px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_900};
  border-radius: 20px;
  margin-top: 5px;
`
export const Button = styled.Button`
  width: 50px;
  height: 30px;
  border-radius: 10px;
`
export const ToRegister = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`
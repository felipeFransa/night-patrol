import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const ContainerClients = styled.ScrollView`
  width: 300px;
  height: 660px;
`
export const BoxClient = styled.View`
  display: flex;
  width: 300px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid black;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const BoxIMGClient = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`
export const IMGClient = styled.Image`
  width: 100%;
  height: 100%;
`
export const BoxInfos = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
`
export const BoxInfoAddress = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100px;
  height: 50px;
`
export const ClientText = styled.Text`
  font-size: 16px;
  color: ${({theme})=>theme.COLORS.TEXT_PRIMARY};
`
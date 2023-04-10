import styled  from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${( { theme } ) => theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const BodyConfig = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
export const ConfigBox = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100px;
`
export const BoxIMGConfig = styled.View`
  background: #fff;
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const IMGConfig = styled.Image`
  width: 50%;
  height: 50%;
`
export const BoxText = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
`
export const TextConfig = styled.Text`
  font-size: 24px;
  color:  ${({theme})=> theme.COLORS.TEXT_PRIMARY};
`
export const BoxArrow = styled.View`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`
export const IMGArrowConfig = styled.Image`
  width: 100%;
  height: 100%;
`
export const BoxLogout = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
`
export const BTNLogoutBox = styled.TouchableOpacity`
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 10px;
`
export const BTNLogoutIMG = styled.Image`
  width: 50%;
  height: 50%;
`
export const BTNLogoutText = styled.Text`
  font-size: 16px;
  color: ${({theme})=>theme.COLORS.TEXT_PRIMARY};
`
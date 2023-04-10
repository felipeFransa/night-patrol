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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ConfigBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100px;
`
export const BoxIMGConfig = styled.View`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`
export const IMGConfig = styled.Image`
  width: 100%;
  height: 100%;
`
export const BoxText = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
`
export const TextConfig = styled.Text`
  font-size: 30px;
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

import { useNavigation } from '@react-navigation/native'
import * as C from './style';

export const Toppings = () => {

  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate('Home')
  }
  const handleGoTopping = () => {
    navigation.navigate("Toppings")
  }
  const handleGoActivities = () => {
    navigation.navigate("Activities")
  }
  return (
    <C.Container>
      <C.BoxText>
        <C.Text>Coberturas</C.Text>
      </C.BoxText>

      <C.ToppingsBox>
        <C.Toppings></C.Toppings>
      </C.ToppingsBox>

      <C.MenuPrimary>
        <C.Icons onPress={handleGoHome}></C.Icons>
        <C.Icons onPress={handleGoTopping}></C.Icons>
        <C.Icons onPress={handleGoActivities}></C.Icons>
        <C.Icons></C.Icons>
      </C.MenuPrimary>
    </C.Container>
  )
}
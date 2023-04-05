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

      <C.ToppingsBox>
        <C.Toppings></C.Toppings>
      </C.ToppingsBox>

    </C.Container>
  )
}
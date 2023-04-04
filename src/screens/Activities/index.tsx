import { useNavigation } from '@react-navigation/native'
import * as C from './style';

export const Activities = () => {

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
        <C.Text>Notifications</C.Text>
      </C.BoxText>

      <C.NotificationBox>
        <C.Notification></C.Notification>
      </C.NotificationBox>

    </C.Container>
  )
}
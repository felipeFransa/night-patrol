import * as C from './style';

export const Activities = () => {
  return (
    <C.Container>
      <C.BoxText>
        <C.Text>Notifications</C.Text>
      </C.BoxText>

      <C.NotificationBox>
        <C.Notification></C.Notification>
      </C.NotificationBox>

      <C.MenuPrimary>
        <C.Icons></C.Icons>
        <C.Icons></C.Icons>
        <C.Icons></C.Icons>
        <C.Icons></C.Icons>
      </C.MenuPrimary>
    </C.Container>
  )
}
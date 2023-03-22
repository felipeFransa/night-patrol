import * as C from './style';

export const Toppings = () => {
  return (
    <C.Container>
      <C.BoxText>
        <C.Text>Coberturas</C.Text>
      </C.BoxText>

      <C.ToppingsBox>
        <C.Toppings></C.Toppings>
      </C.ToppingsBox>

      <C.MenuPrimary>
        <C.Icons></C.Icons>
        <C.Icons></C.Icons>
        <C.Icons></C.Icons>
        <C.Icons></C.Icons>
      </C.MenuPrimary>
    </C.Container>
  )
}
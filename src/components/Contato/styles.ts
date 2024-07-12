import styled from 'styled-components'
import { Button, Textarea } from '../../Styles'
import variaveis from '../../Styles/variaveis'
import * as enums from '../../Utils/Contato'

type FavProps = {
  status?: enums.Status
  parametro: 'status'
}

function returnColor(props: FavProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.NORMAL) return variaveis.asbestos
    if (props.status === enums.Status.FAVORITO) return variaveis.sunflower
  }
  return '#777'
}

export const Card = styled.div`
  padding: 16px;
  display: flex;
  gap: 24px;
  background-color: #ecf0f1;
  margin-bottom: 24px;
  align-items: center;
`

export const Favorite = styled.span<FavProps>`
  border: none;
  font-size: 18px;
  color: ${(props) => returnColor(props)};
  cursor: pointer;
`

export const Name = styled(Textarea)`
  font-size: 16px;
  font-weight: bold;
`

export const Email = styled(Textarea)`
  color: #95a5a6;
`

export const Phone = styled(Textarea)`
  font-size: 16px;
`

export const ActionsArea = styled.div`
  display: inline;
  margin: 0 auto;
`

export const ButtonCancel = styled(Button)`
  background-color: ${variaveis.pomegranede};
`

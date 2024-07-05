import styled from 'styled-components'
import { Button } from '../../Styles'
import variaveis from '../../Styles/variaveis'

export const Card = styled.div`
  padding: 16px;
  display: flex;
  gap: 32px;
  background-color: #ecf0f1;
  margin-bottom: 24px;
  align-items: center;
  width: 70%;
`

export const Name = styled.h3`
  font-size: 16px;
  font-weight: bold;
`

export const Email = styled.textarea`
  font-size: 14px;
  color: #95a5a6;
`

export const Phone = styled.textarea`
  font-size: 16px;
`

export const ActionsArea = styled.div`
  margin: 0 auto;

  label {
    margin-left: 24px;
    margin-right: 8px;
  }
`

export const ButtonCancel = styled(Button)`
  background-color: ${variaveis.pomegranede};
`

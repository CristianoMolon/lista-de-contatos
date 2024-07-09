import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? '#fff' : '#2ecc71')};
  border: 1px solid ${(props) => (props.ativo ? '#27ae60' : '#ecf0f1')};
  color: ${(props) => (props.ativo ? '#27ae60' : '#fff')};
  cursor: pointer;
`

export const Counter = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 2px;
`

export const Label = styled.div`
  font-size: 14px;
`

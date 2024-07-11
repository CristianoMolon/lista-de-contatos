import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #27ae60;
  height: 100vh;
`

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`

export const Search = styled.input`
  padding: 8px;
  border: 2px solid #000;
  color: #7f8c8d;
  border-radius: 8px;
  width: 100%;
`

export const AddCard = styled(Link)`
  display: block;
  text-align: center;
  padding: 8px;
  margin-top: 10px;
  border-radius: 8px;
  text-decoration: none;
  background-color: ${variaveis.cloud};
  color: ${variaveis.emerald};
  cursor: pointer;
`

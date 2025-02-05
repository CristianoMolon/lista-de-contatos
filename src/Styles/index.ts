import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  background-color: #2ecc71;
  color: #fff;
  padding: 8px 12px;
  margin-right: 12px;
  cursor: pointer;
`

export const Textarea = styled.textarea`
  text-align: center;
  padding: 8px;
  height: 38px;
  width: 240px;
  resize: none;
  font-size: 14px;
  border: none;
  background-color: transparent;
`

export const ListContainer = styled.div`
  padding: 0 40px;
  padding-top: 40px;
  height: 90vh;
  overflow-y: scroll;
`
export const Input = styled.input`
  padding: 8px;
  border: 2px solid #000;
  color: #7f8c8d;
  border-radius: 8px;
  width: 100%;
`

export const ButtonBack = styled(Button)`
  background-color: ${variaveis.cloud};
  color: ${variaveis.emerald};
`

export default EstiloGlobal

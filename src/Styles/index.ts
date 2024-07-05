import styled, { createGlobalStyle } from 'styled-components'

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

export default EstiloGlobal

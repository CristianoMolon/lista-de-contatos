import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  display: flex;
  gap: 32px;
  background-color: #ecf0f1;
  margin-bottom: 24px;
  align-items: center;
`

export const Name = styled.h3`
  font-size: 16px;
  font-weight: bold;
`

export const Email = styled.p`
  font-size: 14px;
  color: #95a5a6;
`

export const Phone = styled.p`
  font-size: 16px;
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

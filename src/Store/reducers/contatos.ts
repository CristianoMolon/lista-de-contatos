import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../Models/Contato'
import * as enums from '../../Utils/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      name: 'Cristiano',
      email: 'exemplo@email.com',
      phone: '(00) 00000-0000',
      status: enums.Status.NORMAL,
      id: 1
    },
    {
      name: 'Lucas',
      email: 'exemplo@email.com',
      phone: '(11) 11111-1111',
      status: enums.Status.NORMAL,
      id: 2
    },
    {
      name: 'Evandro',
      email: 'exemplo@email.com',
      phone: '(22) 22222-2222',
      status: enums.Status.NORMAL,
      id: 3
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatoSlice.actions

export default contatoSlice.reducer

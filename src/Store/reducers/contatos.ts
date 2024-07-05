import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../Models/Contato'
import * as enums from '../../Utils/Contato'

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(
      'Cristiano',
      'exemplo@email.com',
      '(00) 00000-0000',
      enums.Status.NORMAL,
      1
    ),
    new Contato(
      'Lucas',
      'exemplo@email.com',
      '(11) 11111-1111',
      enums.Status.FAVORITO,
      2
    ),
    new Contato(
      'Ana',
      'exemplo@email.com',
      '(22) 22222-2222',
      enums.Status.NORMAL,
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatoSlice.actions

export default contatoSlice.reducer

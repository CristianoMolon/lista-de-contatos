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
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (contatoExistente) {
        alert('Contato já cadastrado')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    },
    favoritar: (
      state,
      action: PayloadAction<{ id: number; ending: boolean }>
    ) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato].status = action.payload.ending
          ? enums.Status.FAVORITO
          : enums.Status.NORMAL
      }
    }
  }
})

export const { remover, editar, cadastrar, favoritar } = contatoSlice.actions

export default contatoSlice.reducer

import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'
import filterReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

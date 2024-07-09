import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../Utils/Contato'

type FilterState = {
  term?: string
  criterio: 'status' | 'todos'
  valor?: enums.Status
}

const initialState: FilterState = {
  term: '',
  criterio: 'todos'
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { changeTerm, changeFilter } = FilterSlice.actions

export default FilterSlice.reducer

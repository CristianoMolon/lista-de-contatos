import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../Store/reducers/filter'
import * as enums from '../../Utils/Contato'
import { RootReducer } from '../../Store'

export type Props = {
  subtitulo: string
  criterio: 'status' | 'todos'
  valor?: enums.Status
}

const FilterCard = ({ criterio, valor, subtitulo }: Props) => {
  const dispatch = useDispatch()
  const { filter, contatos } = useSelector((state: RootReducer) => state)

  const checkActive = () => {
    const sameCriterio = filter.criterio === criterio
    const sameValor = filter.valor === valor
    return sameCriterio && sameValor
  }

  const countContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'status') {
      return contatos.itens.filter((item) => item.status === valor).length
    }
  }

  const filtering = () => {
    dispatch(changeFilter({ criterio, valor }))
  }

  const counter = countContatos()
  const ativo = checkActive()

  return (
    <S.Card ativo={ativo} onClick={filtering}>
      <S.Label>{subtitulo}</S.Label>
      <S.Counter>{counter}</S.Counter>
    </S.Card>
  )
}

export default FilterCard

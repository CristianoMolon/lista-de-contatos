import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'

import * as S from './styles'
import * as enums from '../../Utils/Contato'
import { RootReducer } from '../../Store'
import { changeTerm } from '../../Store/reducers/filter'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Search
          type="text"
          placeholder="Pesquisar"
          value={term}
          onChange={(evento) => dispatch(changeTerm(evento.target.value))}
        />
        <S.Filter>
          <FilterCard
            valor={enums.Status.NORMAL}
            criterio="status"
            subtitulo="todos"
          />
          <FilterCard
            valor={enums.Status.FAVORITO}
            criterio="status"
            subtitulo="favorito"
          />
          <S.AddCard to="/novo">Novo Contato</S.AddCard>
        </S.Filter>
      </div>
    </S.Aside>
  )
}

export default Sidebar

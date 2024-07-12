import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import * as enums from '../../Utils/Contato'
import { RootReducer } from '../../Store'
import { changeTerm } from '../../Store/reducers/filter'
import { ButtonBack } from '../../Styles'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <S.Search
              type="text"
              placeholder="Pesquisar"
              value={term}
              onChange={(evento) => dispatch(changeTerm(evento.target.value))}
            />
            <S.Filter>
              <FilterCard
                valor={enums.Status.NORMAL}
                criterio="todos"
                subtitulo="todos"
              />
              <FilterCard
                valor={enums.Status.FAVORITO}
                criterio="status"
                subtitulo="favorito"
              />
              <S.AddCard to="/novo">Novo Contato</S.AddCard>
            </S.Filter>
          </>
        ) : (
          <ButtonBack onClick={() => navigate('/')}>Voltar</ButtonBack>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar

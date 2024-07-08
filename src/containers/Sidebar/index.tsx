import FilterCard from '../../components/FilterCard'

import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.Search placeholder="Pesquisar" />
      <S.Filter>
        <FilterCard counter={5} subtitulo="Todos" ativo />
        <FilterCard counter={5} subtitulo="favorito" />
      </S.Filter>
    </div>
  </S.Aside>
)

export default Sidebar

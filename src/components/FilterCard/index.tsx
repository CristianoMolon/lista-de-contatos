import * as S from './styles'

export type Props = {
  ativo?: boolean
  counter: number
  subtitulo: string
}

const FilterCard = ({ ativo, counter, subtitulo }: Props) => (
  <S.Card ativo={ativo}>
    <S.Label>{subtitulo}</S.Label>
    <S.Counter>{counter}</S.Counter>
  </S.Card>
)

export default FilterCard

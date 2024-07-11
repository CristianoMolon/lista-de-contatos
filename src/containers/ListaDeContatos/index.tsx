import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../Store'
import { ListContainer } from '../../Styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { term, criterio, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterContatos = () => {
    let contatosFiltrados = itens
    if (term !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )
      if (criterio === 'status') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.status === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filterContatos()

  return (
    <ListContainer>
      <ul>
        {contatos.map((c) => (
          <li key={c.name}>
            <Contato
              name={c.name}
              email={c.email}
              phone={c.phone}
              status={c.status}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </ListContainer>
  )
}

export default ListaDeContatos

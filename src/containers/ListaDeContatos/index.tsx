import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../Store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <ul>
        {contatos.map((c) => (
          <li key={c.name}>
            <Contato
              name={c.name}
              email={c.email}
              phone={c.phone}
              status={c.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos

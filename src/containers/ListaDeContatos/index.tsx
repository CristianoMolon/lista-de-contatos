import Contato from '../../components/Contato'
import { Container } from './styles'

const ListaDeContatos = () => (
  <Container>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos

import EstiloGlobal, { Container } from './Styles'
import ListaDeContatos from './containers/ListaDeContatos'
import Sidebar from './containers/Sidebar'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App

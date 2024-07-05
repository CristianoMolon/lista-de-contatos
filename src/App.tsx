import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './Styles'
import ListaDeContatos from './containers/ListaDeContatos'
import Sidebar from './containers/Sidebar'
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App

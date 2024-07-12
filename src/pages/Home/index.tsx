import Sidebar from '../../containers/Sidebar'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <Sidebar showFilters={true} />
    <ListaDeContatos />
  </>
)

export default Home

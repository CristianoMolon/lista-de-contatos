import NovoContato from '../../containers/NovoContato'
import Sidebar from '../../containers/Sidebar'

const New = () => (
  <>
    <Sidebar showFilters={false} />
    <NovoContato />
  </>
)

export default New

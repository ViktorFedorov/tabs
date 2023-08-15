import TabList from '../tab-list/tab-list'
import { WithContext } from '../data-context'

function App() {
  return (
    <div className='App'>
      <WithContext>
        <TabList />
      </WithContext>
    </div>
  )
}

export default App

import './App.css'
import { DevFinder } from './components'
import { useTheme } from './context'

function App() {
  const { theme } = useTheme()

  return (
    <main data-theme={theme}>
      <DevFinder />
    </main>
  )
}

export default App

import './App.css'
import { DevFinder } from './components'
import { useThemeContext } from './context'

function App() {
  const { theme } = useThemeContext()

  return (
    <main data-theme={theme}>
      <DevFinder />
    </main>
  )
}

export default App

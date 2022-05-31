import { AnimatePresence } from 'framer-motion'
import './App.css'
import { DevFinder } from './components'
import { useAppContext, useThemeContext } from './context'

function App() {
  const { theme } = useThemeContext()
  const { dev } = useAppContext()

  return (
    <main data-theme={theme}>
      <DevFinder />
    </main>
  )
}

export default App

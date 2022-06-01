import { AnimatePresence } from 'framer-motion'
import './App.css'
import { Alert, DevFinder } from './components'
import { useAppContext, useThemeContext } from './context'

function App() {
  const { theme } = useThemeContext()
  const { error } = useAppContext()

  return (
    <main data-theme={theme}>
      <DevFinder />
      <AnimatePresence exitBeforeEnter initial={false}>
        {error && <Alert />}
      </AnimatePresence>
    </main>
  )
}

export default App

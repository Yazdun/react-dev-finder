import './App.css'

import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light',
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  return (
    <main data-theme={theme}>
      <div className="Top">
        <button className="ThemeChanger" onClick={switchTheme}>
          {theme === 'light' ? 'DARK' : 'LIGHT'}
        </button>
      </div>
    </main>
  )
}

export default App

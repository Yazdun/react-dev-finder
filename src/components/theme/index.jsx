import css from './styles.module.css'
import { useTheme } from '../../context'

export const Theme = () => {
  const { theme, setTheme } = useTheme()

  const switchTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <button className="ThemeChanger" onClick={switchTheme}>
      {theme === 'light' ? 'DARK' : 'LIGHT'}
    </button>
  )
}

import css from './styles.module.css'
import { useTheme } from '../../context'
import { IoMdSunny } from 'react-icons/io'
import { IoMoon } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { framer_toggle } from './framer'

export const Theme = () => {
  const { theme, setTheme } = useTheme()

  const switchTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button onClick={switchTheme}>
      <AnimatePresence exitBeforeEnter initial={false}>
        {theme === 'light' ? (
          <ThemeState icon={<IoMdSunny />} text="light" key="light" />
        ) : (
          <ThemeState icon={<IoMoon />} text="dark" key="dark" />
        )}
      </AnimatePresence>
    </button>
  )
}

const ThemeState = ({ text, icon }) => {
  return (
    <motion.div {...framer_toggle} className={css.state}>
      {text}
      {icon}
    </motion.div>
  )
}

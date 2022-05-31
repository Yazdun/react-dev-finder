import css from './styles.module.css'
import { Theme, Search } from '../'
import { useAppContext } from '../../context'
import { DevCard } from '../devCard'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

export const DevFinder = () => {
  const { dev } = useAppContext()
  return (
    <motion.div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>devfinder</h1>
        <Theme />
      </header>
      <Search />
      <AnimatePresence exitBeforeEnter>
        <DevCard key={dev.id} dev={dev} />
      </AnimatePresence>
    </motion.div>
  )
}

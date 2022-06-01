import css from './styles.module.css'
import { motion } from 'framer-motion'
import { framer_alert } from './framer'

export const Alert = () => {
  return (
    <div className={css.container} role="alert">
      <motion.div {...framer_alert} className={css.alert}>
        404 ! Not found ...
      </motion.div>
    </div>
  )
}

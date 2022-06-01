import css from './styles.module.css'
import { motion } from 'framer-motion'
import { framer_alert } from './framer'
import { useAppContext } from '../../context'
import { useRef } from 'react'
import { useOnClickOutside } from '../../hooks'
import { VscChromeClose } from 'react-icons/vsc'

export const Alert = () => {
  const { setError } = useAppContext()
  const ref = useRef()

  useOnClickOutside(ref, () => setError(false))

  return (
    <div className={css.container} role="alert">
      <motion.div {...framer_alert} className={css.alert} ref={ref}>
        <span>404 ! Not found ...</span>
        <button onClick={() => setError(false)}>
          <VscChromeClose />
        </button>
      </motion.div>
    </div>
  )
}

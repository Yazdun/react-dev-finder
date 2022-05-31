import { Socials, Profile, Stats } from '../'
import { useAppContext } from '../../context'
import { motion } from 'framer-motion'
import css from './styles.module.css'
import { framer_card } from './framer'

export const DevCard = ({ dev }) => {
  return (
    <motion.div className={css.card} {...framer_card}>
      <img src={dev.avatar_url} alt={dev.name} className={css.image} />
      <div>
        <Profile {...dev} />
        <p className={css.bio}>
          {dev.bio ? dev.bio : 'This profile has no bio'}
        </p>
        <Stats {...dev} />
        <Socials {...dev} />
      </div>
    </motion.div>
  )
}

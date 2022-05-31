import css from './styles.module.css'
import { Socials, Theme, Search, Profile, Stats } from '../'
import { useAppContext } from '../../context'

export const DevFinder = () => {
  const { dev } = useAppContext()
  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>devfinder</h1>
        <Theme />
      </header>
      <Search />
      <div className={css.card}>
        <img src={dev.avatar_url} alt={dev.name} className={css.image} />
        <div>
          <Profile {...dev} />
          <p className={css.bio}>
            {dev.bio ? dev.bio : 'This profile has no bio'}
          </p>
          <Stats {...dev} />
          <Socials {...dev} />
        </div>
      </div>
    </div>
  )
}

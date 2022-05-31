import css from './styles.module.css'
import { Socials, Theme, Search, Profile, Stats } from '../'
import user from '../../mocks/octocat.json'

export const DevFinder = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>devfinder</h1>
        <Theme />
      </header>
      <Search />
      <div className={css.card}>
        <Profile {...user} />
        <Stats {...user} />
        <Socials {...user} />
      </div>
    </div>
  )
}

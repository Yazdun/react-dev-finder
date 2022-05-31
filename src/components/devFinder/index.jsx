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
        <img src={user.avatar_url} alt={user.name} className={css.image} />
        <div>
          <Profile {...user} />
          <p className={css.bio}>
            {user.bio ? user.bio : 'This profile has no bio'}
          </p>
          <Stats {...user} />
          <Socials {...user} />
        </div>
      </div>
    </div>
  )
}

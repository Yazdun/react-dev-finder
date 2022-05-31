import css from './styles.module.css'
import { Socials, Theme, Search, Profile, Stats } from '../'
import octocat from '../../mock/octocat.json'

export const DevFinder = () => {
  const {
    login,
    name,
    created_at,
    public_repos,
    followers,
    following,
    location,
    url,
    company,
    twitter_username,
  } = octocat

  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>devfinder</h1>
        <Theme />
      </header>
      <Search />
      <div className={css.card}>
        <Profile />
        <Stats />
        <Socials />
      </div>
    </div>
  )
}

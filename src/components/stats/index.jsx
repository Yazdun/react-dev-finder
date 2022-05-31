import css from './styles.module.css'

export const Stats = props => {
  const { followers, following, public_repos } = props
  return (
    <ul className={css.stats}>
      <li className={css.item}>
        <span className={css.title}>Repos</span>
        <span className={css.num}>{public_repos}</span>
      </li>
      <li className={css.item}>
        <span className={css.title}>Followers</span>
        <span className={css.num}>{followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.title}>Following</span>
        <span className={css.num}>{following}</span>
      </li>
    </ul>
  )
}

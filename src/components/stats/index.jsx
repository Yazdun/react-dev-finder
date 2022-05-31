import css from './styles.module.css'
import CountUp from 'react-countup'

export const Stats = props => {
  const { followers, following, public_repos } = props
  return (
    <ul className={css.stats}>
      <Item title="Repos" count={public_repos} />
      <Item title="Followers" count={followers} />
      <Item title="Following" count={following} />
    </ul>
  )
}

const Item = ({ title, count }) => {
  return (
    <li className={css.item}>
      <span className={css.title}>{title}</span>
      <span className={css.num}>
        <CountUp start={0} end={count} delay={0.3} duration={0.8} />
      </span>
    </li>
  )
}

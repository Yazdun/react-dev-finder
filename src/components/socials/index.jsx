import css from './styles.module.css'
import { IoLocationSharp, IoLogoTwitter } from 'react-icons/io5'
import { RiBuilding2Fill } from 'react-icons/ri'
import { BiLink } from 'react-icons/bi'

export const Socials = props => {
  const { location, twitter_username, company, blog } = props
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <IoLocationSharp />
        <span>{location}</span>
      </li>
      <li className={css.item}>
        <IoLogoTwitter />
        <span>@{twitter_username}</span>
      </li>
      <li className={css.item}>
        <BiLink />
        <span>{blog}</span>
      </li>
      <li className={css.item}>
        <RiBuilding2Fill />
        <span>@{company}</span>
      </li>
    </ul>
  )
}

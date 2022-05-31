import css from './styles.module.css'
import { IoLocationSharp, IoLogoTwitter } from 'react-icons/io5'
import { RiBuilding2Fill } from 'react-icons/ri'
import { BiLink } from 'react-icons/bi'
import cn from 'classnames'

export const Socials = props => {
  const { location, twitter_username, company, blog } = props
  return (
    <ul className={css.list}>
      <Item icon={<IoLocationSharp />} info={location} />
      <Item
        icon={<IoLogoTwitter />}
        info={twitter_username}
        atsign
        isLink
        isTwitter
      />
      <Item icon={<BiLink />} info={blog} isLink />
      <Item icon={<RiBuilding2Fill />} info={company} />
    </ul>
  )
}

const Item = ({ icon, info, atsign, isLink, isTwitter }) => {
  const isExist = info || info?.length > 0

  if (isLink && isExist) {
    return (
      <li className={css.item}>
        {icon}
        <a
          href={isTwitter ? `https://twitter.com/${info}` : info}
          target="_blank"
          rel="noreferrer"
        >
          {info.slice(0, 16) + '...'}
        </a>
      </li>
    )
  }

  return (
    <li className={cn(css.item, !isExist && css.disabled)}>
      {icon}
      <span>{isExist ? `${atsign ? '@' : ''}${info}` : 'Not Available'}</span>
    </li>
  )
}

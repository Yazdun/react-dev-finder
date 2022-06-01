import Moment from 'react-moment'
import css from './styles.module.css'

export const Profile = props => {
  const { login, name, created_at, avatar_url } = props
  return (
    <div className={css.profile}>
      <img
        className={css.image}
        src={avatar_url}
        alt={name}
        data-testid="profile-image"
      />
      <div className={css.info}>
        <div>
          <h2 className={css.name} data-testid="profile-title">
            {name ? name : login}
          </h2>
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noreferrer"
            className={css.login}
            data-testid="profile-github-link"
          >
            @{login}
          </a>
        </div>
        <span className={css.join}>
          Joined <Moment format="D MMM YYYY" withTitle date={created_at} />
        </span>
      </div>
    </div>
  )
}

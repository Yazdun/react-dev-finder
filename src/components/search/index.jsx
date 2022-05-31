import css from './styles.module.css'
import { Button } from '../'
import { SearchSvg } from './SearchSvg'

export const Search = () => {
  return (
    <div className={css.search}>
      <div className={css.bar}>
        <SearchSvg />
        <input
          className={css.input}
          type="text"
          placeholder="Search GitHub username..."
        />
      </div>
      <Button>Search</Button>
    </div>
  )
}

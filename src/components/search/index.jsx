import css from './styles.module.css'
import { Button } from '../'
import { SearchSvg } from './SearchSvg'
import { useAppContext } from '../../context'

export const Search = () => {
  const { handleSearch, searchTerm, setSearchTerm } = useAppContext()

  const handleChange = e => setSearchTerm(e.target.value.replace(/\s/g, ''))

  return (
    <div className={css.search}>
      <div className={css.bar}>
        <SearchSvg />
        <input
          className={css.input}
          type="text"
          placeholder="Search GitHub username..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm}>
        Search
      </Button>
    </div>
  )
}

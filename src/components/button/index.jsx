import css from './styles.module.css'

export const Button = ({ children }) => {
  return <button className={css.btn}>{children}</button>
}

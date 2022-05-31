import css from './styles.module.css'

export const Button = ({ children, onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      {children}
    </button>
  )
}

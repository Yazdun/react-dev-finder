import css from './styles.module.css'

export const Button = ({ children, onClick, disabled }) => {
  return (
    <button className={css.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

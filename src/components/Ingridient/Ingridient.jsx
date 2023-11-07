import styles from './Ingridient.module.css'

export const Ingridient = ({ ingridient }) => {
  return (
    <div className={styles.ingridient}>
      <svg viewBox='0 0 24 24' fill='#f48982' height='24px' width='24px'>
        <path d='M19.293 5.293l-10.293 10.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0l11-11c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z'></path>
      </svg>
      <span>{ingridient}</span>
    </div>
  )
}

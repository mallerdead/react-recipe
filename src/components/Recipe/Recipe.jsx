import styles from './Recipe.module.css'

export const Recipe = ({ recipe, toggleIsOpen }) => {
  return (
    <button className={`${styles.recipe} ${recipe.isOpen ? styles.active : ''}`} onClick={toggleIsOpen}>
      <div className={styles.recipePreview} style={{ backgroundImage: `url(${recipe.imageUrl})` }}></div>
      <div className={styles.name}>{recipe.name}</div>
    </button>
  )
}

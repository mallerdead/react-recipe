import styles from './RecipeInfo.module.css'
import { CookingConditions, Ingridient } from '..'

export const RecipeInfo = ({ recipe, changeBookmark }) => {
  return (
    <div className={styles.recipeInfo}>
      <div className={styles.recipePreview} style={{ backgroundImage: `url(${recipe.imageUrl})` }}>
        <div className={styles.recipeName}>{recipe.name}</div>
      </div>
      <div className={styles.subtitle}>
        <div className={styles.conditions}>
          <CookingConditions type={'time'} text={`${recipe.cookTime} minutes`} />
          <CookingConditions type={'serving'} text={`${recipe.serving} servings`} />
        </div>
        <button className={styles.addBookmark} onClick={() => {
          changeBookmark(recipe.id)
        }}>
          <svg viewBox='0 0 24 24' width='30px' height='30px'>
            <path d='M18.419 21.814c0.161 0.116 0.363 0.186 0.581 0.186 0.552 0 1-0.448 1-1v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-10c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c-0.001 0.199 0.060 0.404 0.186 0.581 0.321 0.449 0.946 0.554 1.395 0.232l6.419-4.584zM18 19.057l-5.419-3.871c-0.355-0.254-0.819-0.242-1.162 0l-5.419 3.871v-14.057c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h10c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z' fill='white'></path>
          </svg>
        </button>
      </div>
      <div className={styles.recipeIngridients}>
        <span className={styles.recipeIngridientTitle}>RECIPE INGRIDIENTS</span>
        <div className={styles.ingridients}>
          {recipe.recipeIngridients.map((ingridient) => (
            <Ingridient ingridient={ingridient} />
          ))}
        </div>
      </div>
    </div>
  )
}

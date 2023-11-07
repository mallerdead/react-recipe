import styles from './AllRecipes.module.css'
import { Recipe } from '..'

export const AllRecipes = ({ recipes, toggleIsOpen }) => {
  return (
    <div className={styles.allRecipes}>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} toggleIsOpen={() => toggleIsOpen(recipe.id)} />
      ))}
    </div>
  )
}

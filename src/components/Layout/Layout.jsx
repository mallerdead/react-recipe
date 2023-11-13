import { useState } from 'react'
import { Header, AllRecipes, RecipeInfo } from '..'
import styles from './Layout.module.css'

const DUMMY_RECIPE = [
  {
    id: 0,
    name: 'Chicken burger',
    imageUrl: '/src/assets/chickenBurger.jpg',
    cookTime: 90,
    serving: 4,
    isBooked: true,
    recipeIngridients: ['Piece of chicken', 'Bulka dlya burger 2', 'Pincle'],
    isOpen: true,
  },
  {
    id: 1,
    name: 'Beef burger',
    imageUrl: '/src/assets/beefBurger.jpg',
    cookTime: 120,
    serving: 4,
    isBooked: true,
    recipeIngridients: ['Piece of beef', 'Bulka dlya burger 2', 'Pincle'],
    isOpen: false,
  },
  {
    id: 2,
    name: 'Veggie burger',
    imageUrl: '/src/assets/veggieBurger.jpg',
    cookTime: 60,
    serving: 4,
    isBooked: false,
    recipeIngridients: ['Veggie patty', 'Bulka dlya burger 2', 'Pincle'],
    isOpen: false,
  },
  {
    id: 3,
    name: 'Fish burger',
    imageUrl: '/src/assets/fishBurger.jpg',
    cookTime: 60,
    serving: 4,
    isBooked: false,
    recipeIngridients: ['Piece of fish', 'Bulka dlya burger 2', 'Pincle'],
    isOpen: false,
  },
  {
    id: 4,
    name: 'Pasta Carbonara',
    imageUrl: '/src/assets/pastaCarbonara.jpg',
    cookTime: 30,
    serving: 2,
    isBooked: false,
    recipeIngridients: ['Spaghetti', 'Bacon', 'Cream', 'Eggs', 'Parmesan'],
    isOpen: false,
  },
  {
    id: 5,
    name: 'Chicken Caesar Salad',
    imageUrl: '/src/assets/chickenCaesarSalad.jpg',
    cookTime: 20,
    serving: 2,
    isBooked: false,
    recipeIngridients: ['Romaine lettuce', 'Chicken breast', 'Croutons', 'Parmesan', 'Caesar dressing'],
    isOpen: false,
  },
  {
    id: 6,
    name: 'Beef Stir Fry',
    imageUrl: '/src/assets/beefStirFry.jpg',
    cookTime: 25,
    serving: 4,
    isBooked: false,
    recipeIngridients: ['Beef strips', 'Mixed vegetables', 'Soy sauce', 'Garlic', 'Ginger'],
    isOpen: false,
  },
  {
    id: 7,
    name: 'Cheeseburger',
    imageUrl: '/src/assets/cheeseBurger.webp',
    cookTime: 20,
    serving: 1,
    isBooked: false,
    recipeIngridients: ['Ground beef', 'Cheese', 'Burger bun', 'Lettuce', 'Tomato'],
    isOpen: false,
  },
  {
    id: 8,
    name: 'Pancakes',
    imageUrl: '/src/assets/pancakes.jpg',
    cookTime: 15,
    serving: 2,
    isBooked: false,
    recipeIngridients: ['Flour', 'Milk', 'Egg', 'Butter', 'Maple syrup'],
    isOpen: false,
  },
  {
    id: 9,
    name: 'Chicken Alfredo Pasta',
    imageUrl: '/src/assets/chickenAlfredoPasta.jpg',
    cookTime: 30,
    serving: 4,
    isBooked: false,
    recipeIngridients: ['Chicken breast', 'Fettuccine pasta', 'Cream', 'Parmesan cheese', 'Garlic'],
    isOpen: false,
  },
]

export const Layout = () => {
  const [visibleRecipes, setVisibleRecipes] = useState()
  const [recipes, setRecipes] = useState(DUMMY_RECIPE)
  const [search, setSearch] = useState("")
  const [showBookmarked, setShowBookmarked] = useState(false)

  const toggleIsOpen = (id) => {
    setRecipes((prev) =>
      prev.map((recipe) => {
        if (recipe.id === id) {
          return { ...recipe, isOpen: true }
        } else {
          return { ...recipe, isOpen: false }
        }
      }),
    )
  }
  const startSearch = () => {
    if (search === "") {
      setRecipes(DUMMY_RECIPE)
    }
    else {
      let recipeFiltered = DUMMY_RECIPE.filter(recipe => {
        let recipeName = recipe.name.toLowerCase()
        let searchString = search.toLowerCase()

        if (recipeName.includes(searchString)) {
          return recipe
        }
      })
      if (recipeFiltered.length > 0) {
        setRecipes(recipeFiltered)
      }
      else {
        console.error("Ошибка поиска")
      }
    }
  }

  const filterBookmarks = () => {
    if (showBookmarked) {
      const filteredRecipes = recipes.filter(recipe => recipe.isBooked === showBookmarked)
      if (filteredRecipes.length > 0) {
        return filteredRecipes
      }

    }
    return recipes;
  }

  const toggleBookmarkedFilter = () => {
    setShowBookmarked(prev => !prev)
  }

  const changeRecipeBookmark = (id) => {
    setRecipes(prev => {
      return prev.map(recipe => {
        if (recipe.id === id) {
          return { ...recipe, isBooked: !recipe.isBooked }
        }
        else {
          return recipe
        }
      })
    })
  }

  return (
    <>
      <Header searchValue={search} changeSearch={setSearch} startSearch={startSearch} toggleBookmarkedFilter={toggleBookmarkedFilter} />
      <div className={styles.content}>
        <AllRecipes recipes={filterBookmarks()} toggleIsOpen={toggleIsOpen} />
        <RecipeInfo recipe={recipes.find((recipe) => recipe.isOpen)} changeBookmark={changeRecipeBookmark} />
      </div>
    </>
  )
}

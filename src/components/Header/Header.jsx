import styles from './Header.module.css'

import { Search, HeaderButton } from '..'

export function Header({ searchValue, changeSearch, startSearch, toggleBookmarkedFilter }) {
  return (
    <div className={styles.header}>
      <div className='siteName'>RecipeReactApp</div>
      <Search searchValue={searchValue} changeSearch={changeSearch} startSearch={startSearch} />
      <div className={styles.headerButtons}>
        <HeaderButton type={'add recipe'} text={'add recipe'} func={() => { }} />
        <HeaderButton type={'bookmarks'} text={'bookmarks'} func={toggleBookmarkedFilter} />
      </div>
    </div>
  )
}

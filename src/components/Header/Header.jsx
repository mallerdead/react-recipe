import styles from './Header.module.css'

import { Search, HeaderButton } from '..'

export function Header() {
  return (
    <div className={styles.header}>
      <div className='siteName'>RecipeReactApp</div>
      <Search />
      <div className={styles.headerButtons}>
        <HeaderButton type={'add recipe'} text={'add recipe'} />
        <HeaderButton type={'bookmarks'} text={'bookmarks'} />
      </div>
    </div>
  )
}

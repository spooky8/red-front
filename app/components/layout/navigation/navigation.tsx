import Logo from './logo'
import MenuContainer from './menu-container/menu-container'

import styles from './navigation.module.scss'

function navigation() {
  return (
    <div className={styles.navigation}>
      <Logo />
      <MenuContainer />
    </div>
  )
}

export default navigation

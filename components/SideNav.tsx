import styles from 'styles/SideNav.module.css'
import { HiOutlineX } from 'react-icons/hi'
import Portal from './Portal'
import Button from './Button'

export default function SideNav() {
  return (
    <Portal selector='#portal'>
      <div className={ styles.overlay } />
      <nav className={ styles.nav }>
        <ul>
          <li><a href='#home'>Главная</a></li>
          <li><a href='#about'>Обо мне</a></li>
          <li><a href='#skills'>Навыки</a></li>
          <li><a href='#projects'>Проекты</a></li>
          <li><a href='#contact'>Связаться</a></li>
        </ul>
        <Button
          className={ styles.closeBtn }
          variant='icon'
          OnClick={ () => console.log('lcik2') }
        >
          <HiOutlineX />
        </Button>
      </nav>
    </Portal>
  )
}
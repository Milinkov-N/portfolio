import styles from 'styles/Header.module.css'
import Logo from './Logo'
import Button from './Button'
import Wrapper from './Wrapper'
import { HiMenu } from 'react-icons/hi'
import SideNav from './SideNav'

export default function Header() {
  return (
    <header className={ styles.header }>
      <Wrapper className={ styles.wrapper }>
        <Logo />
        <nav className={ styles.nav }>
          <ul>
            <li><a href='#home'>Главная</a></li>
            <li><a href='#about'>Обо мне</a></li>
            <li><a href='#skills'>Навыки</a></li>
            <li><a href='#projects'>Проекты</a></li>
          </ul>
        </nav>
        <Button
          className={ styles.contactBtn }
          variant='primary'
          label='Связаться'
        />
        <Button
          className={ styles.burgerBtn }
          variant='icon'
          OnClick={ () => console.log('lcik') }
        >
          <HiMenu />
        </Button>
      </Wrapper>
      <SideNav />
    </header>
  )
}

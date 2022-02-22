import styles from 'styles/Header.module.css'
import Logo from './Logo'
import Button from './Button'
import Wrapper from './Wrapper'
import { HiMenu } from 'react-icons/hi'
import SideNav from './SideNav'
import { useState } from 'react'
import Dropdown from './Dropdown'

export default function Header() {
  const [navIsOpened, setNavIsOpened] = useState(false)

  const openNav = () => setNavIsOpened(true)
  const closeNav = () => setNavIsOpened(false)

  return (
    <header className={ styles.header }>
      <Wrapper className={ styles.wrapper }>
        <Logo />
        <nav className={ styles.nav }>
          <ul>
            <li>
              <a href='#home'>Главная</a>
            </li>
            <li>
              <a href='#about'>Обо мне</a>
            </li>
            <li>
              <a href='#skills'>Навыки</a>
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </nav>
        <Button
          className={ styles.contactBtn }
          as='link'
          href='#contact'
          variant='primary'
          label='Связаться'
        />
        <Button
          className={ styles.burgerBtn }
          variant='icon'
          onClick={ openNav }
        >
          <HiMenu />
        </Button>
      </Wrapper>
      <SideNav
        show={ navIsOpened }
        onClose={ closeNav }
      />
    </header>
  )
}

import styles from 'styles/Header.module.css'
import Logo from './Logo'
import Button from './Button'
import Wrapper from './Wrapper'

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
        <Button className={ styles.btn } label='Связаться' />
      </Wrapper>
    </header>
  )
}

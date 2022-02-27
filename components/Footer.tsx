import styles from 'styles/Footer.module.css'
import Logo from './Logo'
import Wrapper from './Wrapper'
import { FaGithub, FaVk, FaInstagram, FaAt, FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <Wrapper className={ styles.wrapper }>
        <div className={ styles.info }>
          <Logo />
          <span className={ styles.infoDetails }>Милиньков Никита / Удмуртская респ. г. Воткинск</span>
        </div>
        <div className={ styles.contacts }>
          <div className={ styles.contactsDetails }>
            <span className='flex ai-center gap-sm'>
              <FaAt />
              milinkov.nik@gmail.com
            </span>
            <a className='flex ai-center gap-sm' href='tel:+79508389999'>
              <FaPhoneAlt />
              8 (982) 992-39-59
            </a>
          </div>
          <div className={ styles.contactsSocials }>
            <a href='/' target='_blank'>
              <FaGithub />
            </a>
            <a href='/' target='_blank'>
              <FaVk />
            </a>
            <a href='/' target='_blank'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

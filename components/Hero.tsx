import styles from 'styles/Hero.module.css'
import TagWrapper from './TagWrapper'
import { Heading } from './typography'
import ProgrammerPic from'public/undraw_programming.svg'
import Wrapper from './Wrapper'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='hero'>
      <Wrapper>
        <div className={ styles.bgCircle } />
        <div className={ styles.grid }>
          <TagWrapper className={ styles.tagWrapper } tag='Web-Developer'>
            <Heading
              as='h1'
              level={ 1 }
              label='Никита Милиньков'
            />
            <p className={ styles.subheading }>
              Специализируюсь на создании UI/UX, разработке адаптивных и современных вебсайтов
            </p>
          </TagWrapper>
          <div className={ styles.illustration }>
            <Image src={ ProgrammerPic } />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

import styles from 'styles/Hero.module.css'
import TagWrapper from './TagWrapper'
import { Heading } from './typography'
import ProgrammerPic from'public/undraw_programming.svg'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Button from './Button'

export default function Hero() {
  return (
    <section className={ styles.hero }>
      <Wrapper>
        <div className={ styles.bgCircle } />
        <div className={ styles.grid }>
          <div className={ styles.content }>
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
            <div className={ styles.buttonLinks }>
              <Button 
                variant='primary'
                size='medium'
                label='Нанять меня'
              />
              <Button
                variant='text'
                label='Посмотреть проекты'
              >
                <span className={ styles.projectsLink }>
                  Посмотреть проекты
                </span>
              </Button>
            </div>
          </div>
          
          <div className={ styles.illustration }>
            <Image src={ ProgrammerPic } />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

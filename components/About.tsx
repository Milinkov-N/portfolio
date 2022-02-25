import Image from 'next/image'
import styles from 'styles/About.module.css'
import profileImage from 'public/about_image.jpg'
import Wrapper from './Wrapper'
import Button from './Button'
import Ellipse from './Ellipse'

export default function About() {
  return (
    <section className={ styles.aboutSection }>
      <Ellipse className={ styles.ellipse } color='secondary' />
      <Wrapper className={ styles.wrapper }>
        <div className='grid grid-col-2'>
          <div className="grid-elem profile-image">
            <div className={ styles.imageContainer }>
              <div className={ styles.imageWrapper }>
                <Image
                  src={ profileImage }
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
          <div className={ styles.content }>
            <h2 className='heading-4'>Немного обо Мне</h2>
            <div>
              <p>Я - начинающий Веб-разработчик, со средним профессиональным образованием в сфере информационных технологий.</p>
              <p>Моя специальность - создание лендингов, e-commerce сайтов и SPA (Single Page Application) с современным дизайном и с использованием не менее современных инструментов, таких как React, Next.js, TypeScript, Redux, Framer Motion.</p>
            </div>
            
            <Button size='medium' label='Моя анкета на hh.ru' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

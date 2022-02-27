import styles from 'styles/Contact.module.css'
import contactSVG from 'public/contact_us.svg'
import Image from 'next/image'
import Button from './Button'
import { Heading } from './typography'
import Wrapper from './Wrapper'
import Ellipse from './Ellipse'

export default function Contact() {
  return (
    <section className={ styles.contactSection }>
      <Ellipse className={ styles.ellipse } color='blue' />
      <Wrapper className={ styles.wrapper }>
        <div className={ styles.grid }>
          <div className={ styles.illustration }>
            <div className={ styles.imageWrapper }>
              <Image
                src={ contactSVG }
                layout='fill'
                objectFit='contain'
              />
            </div>
            
          </div>
          <div className={ styles.content }>
            <Heading
              as='h2'
              level={ 3 }
              label='Связаться со мной'
            />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, quaerat debitis quibusdam odit eos delectus ut similique unde soluta pariatur nihil sint? Autem fugit quis quaerat exercitationem velit laboriosam, ab, voluptatum sunt unde eius tempora!</p>
            <form className={ styles.contactForm } action="">
              <input
                className={ styles.input }
                type='text'
                placeholder='Никита'
              />
              <input
                className={ styles.input }
                type='email'
                placeholder='example@gmail.com'
              />
              <textarea
                className={ `${ styles.input } ${ styles.textArea }` }
                placeholder='Ваше сообщение'
              />
              <Button
                className={ styles.submitBtn }
                type='submit'
                size='large'
                label='Отправить'
              /> 
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

import styles from 'styles/TechStack.module.css'
import Image from 'next/image'
import Wrapper from './Wrapper'
import HTMLLogo from 'public/html.png'
import CSSLogo from 'public/css.png'
import JSLogo from 'public/javascript.png'
import ReduxLogo from 'public/redux.png'
import SassLogo from 'public/sass.png'
import TSLogo from 'public/typescript.svg'
import ReactLogo from 'public/logo512.png'

export default function TechStack() {
  return (
    <section className={ styles.techStack }>
      <Wrapper>
        <div className={ styles.gridContent }>
          <div className={ styles.contentAreaLeft }>
            <TechLogo
              className={ styles.smallLogo }
              id={ styles['htmlLogo'] }
              icon={ HTMLLogo }
            />
            <TechLogo
              className={ styles.smallLogo }
              id={ styles['cssLogo'] }
              icon={ CSSLogo }
            />
            <TechLogo
              className={ styles.smallLogo }
              id={ styles['jsLogo'] }
              icon={ JSLogo }
            />
          </div>
          
          <TechLogo className={ styles.reactLogo } icon={ ReactLogo } react />

          <div className={ styles.contentAreaRight }>
            <TechLogo
              className={ styles.smallLogo }
              id={ styles['reduxLogo'] }
              icon={ ReduxLogo }
            />
            <TechLogo
              className={ styles.smallLogo }
              id={ styles['sassLogo'] }
              icon={ SassLogo }
            />
            <TechLogo
              className={ styles.smallLogo }
              id={ styles['tsLogo'] }
              icon={ TSLogo }
              typescript
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export interface ITechLogo {
  className?: string
  id?: string
  icon: StaticImageData
  react?: boolean
  typescript?: boolean
}

function TechLogo ({ className, id, icon, react, typescript = false }: ITechLogo) {
  let imageSize = 48
  if (typescript) {
    imageSize = 36
  } else if (react) {
    imageSize = 176
  }

  return (
    <div className={ className } id={ id }>
      <Image src={ icon } width={ imageSize } height={ imageSize } />
    </div>
  )
}

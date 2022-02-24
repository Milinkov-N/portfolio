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
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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

          <div className={ styles.reactLogo }>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            >
              <Image
                src={ ReactLogo }
                width='176'
                height='176'
              /> 
            </motion.div>
          </div>
          
          

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
  typescript?: boolean
}

function TechLogo ({ className, id, icon, typescript = false }: ITechLogo) {
  const initialState = 48
  const [imageSize, setImageSize] = useState(initialState)

  const imageSizes = {
    scaled: 72,
    typescriptInitial: 36,
    typescriptScaled: 56
  }

  const scaleImage = () => {
    if (typescript) {
      setImageSize(imageSizes.typescriptScaled)
    } else {
      setImageSize(imageSizes.scaled)
    }    
  }

  const unscaleImage = () => {
    if (typescript) {
      setImageSize(imageSizes.typescriptInitial)
    } else {
      setImageSize(initialState)
    }
  }

  useEffect(() => {
    if (typescript) setImageSize(imageSizes.typescriptInitial)
  }, [])

  return (
    <div
      className={ className }
      id={ id }
      onMouseEnter={ scaleImage }
      onMouseLeave={ unscaleImage }
    >
      <motion.div
        animate={{ width: imageSize, height: imageSize }}
      >
        <Image src={ icon } width='100%' height='100%' /> 
      </motion.div>
    </div>
  )
}

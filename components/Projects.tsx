import styles from 'styles/Projects.module.css'
import Image from 'next/image'
import { Heading } from './typography'
import Wrapper from './Wrapper'
import projectOneImage from 'public/project1.png'
import projectTwoImage from 'public/project2.png'
import Ellipse from './Ellipse'

export default function Projects() {
  return (
    <section className={ styles.projectsSection }>
      <Ellipse className={ styles.ellipse } color='violet' />
      <Wrapper className={ styles.wrapper }>
        <Heading
          as='h2'
          level={ 3 }
          label='Мои проекты'
        />
        <div className={ styles.projectsList }>
          <Project
            image={ projectOneImage }
            heading='Название проекта'
            desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi at fugiat, repellat deleniti, sint quas quaerat est sapiente nemo, veritatis quo suscipit esse iusto eum. Blanditiis maxime, non facilis fugit officia neque repellat eligendi, officiis modi sunt quas illum?'
          />
          <Project
            image={ projectTwoImage }
            heading='Название проекта'
            desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi at fugiat, repellat deleniti, sint quas quaerat est sapiente nemo, veritatis quo suscipit esse iusto eum. Blanditiis maxime, non facilis fugit officia neque repellat eligendi, officiis modi sunt quas illum?'
          />
        </div>
      </Wrapper>
    </section>
  )
}

export interface IProject {
  heading: string
  image: StaticImageData
  desc: string
}

function Project({ heading, image, desc }: IProject) {
  return (
    <div className={ styles.projectsListItem }>
      <div className={ styles.imageWrapper }>
        <Image
          src={ image }
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={ styles.itemContent }>
        <Heading
          as='h3'
          level={ 4 }
          label={ heading }
        />
        <p>{ desc }</p>
      </div>
    </div>
  )
}
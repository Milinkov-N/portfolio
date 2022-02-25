import styles from 'styles/Skills.module.css'
import Button from './Button'
import Wrapper from './Wrapper'
import { HiOutlineTemplate, HiOutlineCode, HiOutlineGlobeAlt } from 'react-icons/hi'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

export default function Skills() {
  return (
    <section className={ styles.skillsSection }>
      <div className={ styles.background }>
        <Wrapper>
          <div className={ styles.grid }>
            <div className={ styles.contentArea }>
              <h2 className='heading-1'>Что я могу для Вас сделать</h2>
              <p className={ styles.description }>
                Современный стек технологий и передовые техники создания UI/UX дизайна гарантируют вашему сайту удобство использования и отличную оптимизацию
              </p>
              <Button
                variant='white'
                size='large'
                label='Связаться со мной'
              />
            </div>
            <div className={ styles.cardsArea }>
              <Card
                id={ styles.uiCard }
                icon={ <HiOutlineTemplate /> }
                heading='UI/UX'
                desc='Вебсайт, приложение - я могу разработать современный дизайн в этих двух областях'
              />
              <Card
                icon={ <HiOutlineCode /> }
                heading='Современный сайт'
                desc='Быстрые и адаптивные вебсайты с адаптивной версткой и анимациями'
              />
              <Card
                icon={ <HiOutlineGlobeAlt /> }
                heading='Deploy сайта'
                desc='Если вам нужен простой некоомерческий проект, то я смогу выгрузить его на бесплатный хостинг'
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  )
}

export interface ICard extends ComponentPropsWithoutRef<'div'> {
  icon: ReactNode
  heading: string
  desc: string
}

function Card({ icon, heading, desc, ...all }: ICard) {
  return (
    <div className={ styles.card } { ...all }>
      <div className={ styles.cardIcon }>
        { icon }
      </div>
      <h3 className='heading-4'>{ heading }</h3>
      <p>{ desc }</p>
    </div>
  )
}

export { Card }
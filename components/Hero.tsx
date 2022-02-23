import TagWrapper from './TagWrapper'
import { Heading } from './typography'
import Wrapper from './Wrapper'

export default function Hero() {
  return (
    <section className='hero'>
      <Wrapper>
        <TagWrapper tag='Web-Developer'>
          <Heading
            as='h1'
            level={ 1 }
            label='Никита Милиньков'
          />
          <p>
            Специализируюсь на создании UI/UX, разработке адаптивных и современных вебсайтов
          </p>
        </TagWrapper>
      </Wrapper>
    </section>
  )
}

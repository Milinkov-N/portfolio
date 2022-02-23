import TagWrapper from './TagWrapper'
import Wrapper from './Wrapper'

export default function Hero() {
  return (
    <section className='hero'>
      <Wrapper>
        <TagWrapper tag='Web-Developer'>
          <h1>Никита Милиньков</h1>
          <p>Специализируюсь на создании UI/UX, разработке адаптивных и современных вебсайтов</p>
        </TagWrapper>
      </Wrapper>
    </section>
  )
}

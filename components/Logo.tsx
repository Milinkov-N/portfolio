import Link from 'next/link'

export default function Logo() {
  return (
    <div className='logo'>
      <Link href='/'>
        <a>
          <span className='primary-clr'>{ '<' }</span>
          <span>{ 'Milinkoff ' }</span>
          <span className='primary-clr'>{ '/>' }</span>
        </a>
      </Link>
    </div>
  )
}

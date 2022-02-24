import { ReactNode } from 'react'
import styles from 'styles/TagWrapper.module.css'

export interface ITagWrapper {
  className?: string
  tag: string
  children?: ReactNode
}

export default function TagWrapper({ className, tag, children }: ITagWrapper) {
  return (
    <div className={ `tag-wrapper ${ className ? className : '' }` }>
      <div className={ `${ styles.tag } opening-tag gradient-text` }>
        { `<${ tag }>` }
      </div>
        <div className={ styles.content }>
          { children }
        </div>
      <div className={ `${ styles.tag } closing-tag gradient-text` }>
        { `</${ tag }>` }
      </div>
    </div>
    
  )
}

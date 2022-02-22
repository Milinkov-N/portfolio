import React, { ReactNode } from 'react'

export interface IWrapper {
  className?: string
  children?: ReactNode
}

export default function Wrapper({ className, children }: IWrapper) {
  return (
    <div className={ `wrapper ${ className ? className : '' }` }>
      { children }
    </div>
  )
}

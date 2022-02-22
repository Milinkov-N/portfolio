import React, { ReactNode } from 'react'

interface IWrapper {
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

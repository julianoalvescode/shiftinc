import React from 'react'

import './styles.scss'
import * as C from 'components'

export const Vitrine = (): React.ReactElement => {
  return (
    <main className="vitrine-container">
      <C.Catalogo />
      <C.NewsLetter />
    </main>
  )
}

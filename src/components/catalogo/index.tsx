import React, { useState, useEffect } from 'react'

import './styles.scss'
import * as C from 'components'

import * as I from 'shared/interfaces'
import { VitrineService } from 'services'

export const Catalogo = (): React.ReactElement => {
  const [products, SetProducts] = useState<I.VitrineProduct[] | null>(null)

  useEffect(() => {
    async function getData() {
      const response = await VitrineService.getProducts()
      SetProducts(response)
    }

    getData()
  }, [])

  return (
    <ul className="container-catalogo">
      {products && products?.map((i) => <C.Card key={i.productId} data={i} />)}
    </ul>
  )
}

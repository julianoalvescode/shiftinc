import React from 'react'

import * as I from 'shared/interfaces'

import './styles.scss'

export const Card = ({ data }: { data: I.VitrineProduct }): React.ReactElement => {
  return (
    <li className="card-container">
      <img
        alt="Image"
        src="https://juliookubo.vteximg.com.br/arquivos/ids/181612-358-358/V241818_1_frontview.jpg?v=637583865320100000"
      />
      <h2 className="title">{data.productTitle && data.productTitle}</h2>
      <div className="info">
        <h2 className="price">R$ 3.400,00</h2>
        <h2 className="parcels">10x de R$ 340,00 sem juros</h2>
      </div>
      <a href="#" className="btn-card">
        Comprar
      </a>
    </li>
  )
}

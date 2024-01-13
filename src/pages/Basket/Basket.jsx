import React from 'react'
import { useState } from 'react'
import * as SC from '../Pages.styled'
import BasketCard from './BasketCard'

export default function Basket () {
  const [basketProduct, setBasketProduct] = useState(() => {
    const inBasket = JSON.parse(localStorage.getItem('basket'))
    return inBasket ?? []
  })
  const deleteBasket = id => {
    const newBasket = basketProduct.filter(item => item.id !== id)
    localStorage.setItem('basket', JSON.stringify(newBasket))
    setBasketProduct(newBasket)
  }
  return (
    <>
      <SC.HeaderPage>Basket</SC.HeaderPage>
      <ul>
        {basketProduct?.map(({ id, image, price, title }) => (
          <BasketCard
            key={id}
            id={id}
            image={image}
            price={price}
            title={title}
            deleteBasket={deleteBasket}
          />
        ))}
      </ul>
    </>
  )
}

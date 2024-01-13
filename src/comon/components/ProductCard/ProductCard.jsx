import React from 'react'
import * as SC from './ProductCad.styled'
import { addToBasket, getBasket } from '../../../redux/basket'
import { useDispatch, useSelector } from 'react-redux'
import { localStoregeFunk } from '../../../helpers/localStoregeFunk'

export default function ProductCard ({ id, image, price, title, description }) {
  const dispatch = useDispatch()

  const hendlerBasket = () => {
    const rezalt = localStoregeFunk({ id, title, image, price })
    if (!rezalt) {
      alert('All ready in basket')
      return
    }
    dispatch(addToBasket(1))
  }
  const basket = useSelector(getBasket)
  console.log(basket)
  return (
    <SC.Card key={id}>
      <SC.ProductName>{title}</SC.ProductName>
      <SC.ProductPhoto src={image} alt={id} />
      <SC.ProductPrice>{price}</SC.ProductPrice>
      <p>{description}</p>
      <button type='button' onClick={hendlerBasket}>
        add to basket
      </button>
    </SC.Card>
  )
}

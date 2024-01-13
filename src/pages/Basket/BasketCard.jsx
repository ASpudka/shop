import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useState, useEffect } from 'react'
import * as SC from './Basket.styled'
import { useDispatch } from 'react-redux'
import { addToBasket, removeToBasket } from '../../redux/basket'
import { localStorageMutaitionAmount } from '../../helpers/localStoregeFunk'

export default function BasketCard ({ id, image, price, title, deleteBasket }) {
  console.log('id', id)
  const [amount, setAmount] = useState(() => {
    const product = JSON.parse(localStorage.getItem('basket'))
    if (product) {
      const idThis = product.find(item => item.id === id)
      return idThis?.amount ?? 1
    }
    return 1
  })
  useEffect(() => {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'mlex',
        password: '12345678s'
      })
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.log(error.message))
  }, [])

  const dispatch = useDispatch()

  const hendlerRemoveAmount = () => {
    setAmount(amount - 1)
    localStorageMutaitionAmount(id, amount - 1)
    dispatch(removeToBasket(1))
  }
  const hendlerAddAmount = () => {
    setAmount(amount + 1)
    localStorageMutaitionAmount(id, amount + 1)
    dispatch(addToBasket(1))
  }
  const hendlerDelete = () => {
    deleteBasket(id)
    dispatch(removeToBasket(amount))
  }
  const inCheck = price * amount

  return (
    <SC.Card>
      <SC.Wrapper>
        <SC.ProductName>{title}</SC.ProductName>
        <SC.WrapperInfo>
          <SC.ProductPhoto src={image} width={100} />
          <p>{price}$</p>
        </SC.WrapperInfo>
      </SC.Wrapper>
      <SC.WrapperBtn>
        <SC.Btn
          type='button'
          disabled={amount === 1}
          onClick={hendlerRemoveAmount}
        >
          -
        </SC.Btn>
        <p>{amount}</p>
        <SC.Btn type='button' onClick={hendlerAddAmount}>
          +
        </SC.Btn>

        <SC.Btn type='button' onClick={hendlerDelete}>
          <MdDelete />
        </SC.Btn>
      </SC.WrapperBtn>

      <SC.Check>{inCheck}$</SC.Check>
    </SC.Card>
  )
}

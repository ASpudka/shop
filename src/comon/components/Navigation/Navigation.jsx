import React from 'react'
import { mainNav } from '../../../helpers/mainNav'
import { BsBasket3 } from 'react-icons/bs'
import { getBasket } from '../../../redux/basket'
import { useSelector } from 'react-redux'
import * as SC from './Navigation.styled'

export default function Navigation () {
  const basket = useSelector(getBasket)
  return (
    <SC.Wrapper>
      <SC.Logo>DS</SC.Logo>
      <SC.ListWrapper>
        {mainNav.map(({ id, href, text }) => (
          <li key={id}>
            <SC.NavigationLink to={href}>{text}</SC.NavigationLink>
          </li>
        ))}
      </SC.ListWrapper>
      <li>
        <SC.BasketLink to='/basket'>
          <BsBasket3 />
        </SC.BasketLink>
        <SC.BasketCount> {basket}</SC.BasketCount>
      </li>
    </SC.Wrapper>
  )
}

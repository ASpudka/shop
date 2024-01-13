import React from 'react'
import { useGetCategoriesQuery } from '../../../redux/cotalogOperations/cotalogOperation'
import * as SC from '../../Pages.styled'

export default function CotalogNav () {
  const { data } = useGetCategoriesQuery()
  
  return (
    <SC.Wrapper>
      {data?.map(category => (
        <li key={category}>
          <SC.CategoryLink to={category}>{category}</SC.CategoryLink>
        </li>
      ))}
      <li> <SC.CategoryLink  to='cotalog'> All products</SC.CategoryLink></li>
    </SC.Wrapper>
  )
}

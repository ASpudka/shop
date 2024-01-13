import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ProductCard from '../../../comon/components/ProductCard/ProductCard'
import { useGetProductsQuery } from '../../../redux/cotalogOperations/cotalogOperation'
import CotalogNav from './CotalogNav'
import * as SC from '../../Pages.styled'

export default function Cotalog () {
  const { data } = useGetProductsQuery()
const {pathname}= useLocation()

  return (
    <><CotalogNav/>
    <Outlet/>
     {pathname ==="/cotalog"&&
      <SC.Wrapper>
        {data?.map(({ id, image, price, title, description }) => (
          <ProductCard
          id={id}
          image={image}
          price={price}
          title={title}
          description={description}/>
        ))}
      </SC.Wrapper>
      }
    </>
  )
}

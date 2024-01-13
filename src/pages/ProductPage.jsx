import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../comon/components/ProductCard/ProductCard'
import { useGetProductsQuery } from '../redux/cotalogOperations/cotalogOperation'
import * as SC from './Pages.styled'

export default function ProductPage() {
  const {category} = useParams()

   const {data}=useGetProductsQuery(category==="cotalog"? null: category)
   
  return (
   <>
   <SC.HeaderPage>{category}</SC.HeaderPage>
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
   </>
  )
}

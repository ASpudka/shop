import styled from 'styled-components'

export const Card = styled.li`
justify-content:space-around;
width:25%;
padding: ${props => props.theme.space[4]}px;
  text-align: center;
  list-style: none;
`
export const ProductName = styled.h2`
font-size: ${props => props.theme.fontSizes.ml}px;
`

export const ProductPhoto = styled.img`
height:200px;
width:200px;

`
export const ProductPrice = styled.p`

`
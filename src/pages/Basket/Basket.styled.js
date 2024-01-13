import styled from 'styled-components'
export const Card = styled.div`
  display: flex;
  justify-content:center;
  margin: auto;
  text-align: center;

  
`
export const Wrapper = styled.div`
  
  text-align: center;
  
`
export const WrapperInfo = styled.div`
  display: flex;
  margin: auto;
  font-size: ${props => props.theme.fontSizes.l}px;
  
`
export const WrapperBtn = styled.div`
  display:flex;
  margin: auto;
  padding: ${props => props.theme.space[3]}px;
  
  
  
  
`
export const Btn = styled.button`
 justify-content:center;
 margin: 0  20px ;  
 padding: 0 200 px;
 
 font-size: ${props => props.theme.fontSizes.l}px; 
 
  
`
export const ProductName = styled.h2`
width: 30vw;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

export const ProductPhoto = styled.img`
  margin-right: 50px;
  height: 150px;
  width: 150px;
`
export const Check = styled.p`
margin: auto;  
font-size: ${props => props.theme.fontSizes.xl}px; 
`

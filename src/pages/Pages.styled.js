import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import bgimg from '../images/sofa.png'

export const HeaderPage = styled.h1`
  color: ${props => props.theme.colors.textActiv};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xl}px;
`
export const InfoPage = styled.p`
  justify-content: center;
  color: ${props => props.theme.colors.textActiv};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.l}px;
`
export const Llo = styled.div`
width:100vw;
  height:100vh;
  background-image: url("${bgimg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  
`

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin: 0 15%;
  padding: ${props => props.theme.space[4]}px;
  text-align: center;
  list-style: none;
`
export const WrapperForm = styled.div`
 display:flex;
 flex-direction:column;
 margin: 1% 40%;
 padding: ${props => props.theme.space[4]}px;text-align: center;
  
`


export const CategoryLink = styled(NavLink)`
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.hoverBackground};
  text-decoration: none;
  &.active {
    background-color: ${props => props.theme.colors.navBackground};
    color: ${props => props.theme.colors.textActiv};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${props => props.theme.colors.navBackground};
    color: ${props => props.theme.colors.text};
  }
`
export const AboutUsList = styled.li``
export const AboutUsInfo = styled.div``

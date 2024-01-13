import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const List= styled.ul`
position: absolute;
top: 150px;
left: 40%;
color: ${props => props.theme.colors.text};
list-style: none;
text-decoration:none;
font-size: ${props => props.theme.fontSizes.xl}px;
`
export const AuthLink = styled(NavLink)`
color: ${props => props.theme.colors.text};
list-style: none;
text-decoration:none;
font-size: ${props => props.theme.fontSizes.xm}px;

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
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.navBackground};

  text-align: center;
  list-style: none;
`
export const Logo = styled.div`
  margin: 1% 0;
  color: ${props => props.theme.colors.textActiv};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xl}px;
`

export const ListWrapper = styled.ul`
  display: flex;

  padding: ${props => props.theme.space[4]}px;

  text-align: center;
  list-style: none;
`
export const NavigationLink = styled(NavLink)`
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
export const BasketLink = styled(NavLink)`
  color: ${props => props.theme.colors.textActiv};
  font-size: ${props => props.theme.fontSizes.xl}px;
`
export const BasketCount =styled.div`
position: relative;
top: -40px; 
color: ${props => props.theme.colors.textActiv};
`
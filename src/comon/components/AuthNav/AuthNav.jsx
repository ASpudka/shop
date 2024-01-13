import React from 'react'
import { NavLink } from 'react-router-dom'
import { nav } from './nav'
import * as SC from "./AuthNav.styled"

export default function AuthNav() {
  return (
   <>
   <SC.List>
   {nav.map(({id, href, text})=>(
    <li key={id}>
      <SC.AuthLink to={href}>{text}</SC.AuthLink>
    </li>
   ))}
   </SC.List>
   </>
  )
}

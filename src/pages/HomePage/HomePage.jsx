import React from 'react'
import AuthNav from '../../comon/components/AuthNav/AuthNav'
import * as SC from '../Pages.styled'

export default function HomePage () {
  return (
    <><SC.Llo>
      <SC.HeaderPage>DIVAN'S SHOP</SC.HeaderPage>
      <SC.InfoPage>shop withot leaving home</SC.InfoPage>
      <AuthNav/>
      </SC.Llo>
    </>
  )
}

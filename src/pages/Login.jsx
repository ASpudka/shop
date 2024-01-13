import React from 'react'
import { useState } from 'react'
import * as SC from './Pages.styled'

export default function Login () {
  const [name, setName] = useState('')

  const [password, setPassword] = useState('')

  const hendlerChange = event => {
    const { name, value } = event.target
    switch (name) {
      case 'userName':
        setName(value)
        return

      case 'userPassword':
        setPassword(value)
        return

      default:
        return
    }
  }
  const hendlerSubmit = () => {}

  return (
    <form onSubmit={hendlerSubmit}>
      <SC.WrapperForm><label>
        Name
        <input
          type='text'
          name='userName'
          value={name}
          onChange={hendlerChange}
        /></label>
      <label>
        {' '}
        Password
        <input
          type='password'
          name='userPassword'
          value={password}
          onChange={hendlerChange}
        /></label></SC.WrapperForm>

<SC.WrapperForm><button type='submit'>Login</button></SC.WrapperForm>
    </form>
  )
}

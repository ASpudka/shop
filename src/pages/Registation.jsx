import React from 'react'
import { useState } from 'react'
import * as SC from './Pages.styled'

export default function Registation () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [controlPassword, setControlPassword] = useState('')

  const hendlerChange = event => {
    const { name, value } = event.target
    switch (name) {
      case 'userName':
        setName(value)
        return
      case 'userEail':
        setEmail(value)
        return
      case 'userPassword':
        setPassword(value)
        return
      case 'controlPassword':
        setControlPassword(value)
        return
      default:
        return
    }
  }
  const hendlerSubmit = ()=>{}

  return (
    <form onSubmit={hendlerSubmit}>
      <SC.WrapperForm><label>
        Name
        <input type='text' name='userName' value={name} onChange={hendlerChange} />
      </label>
      <label>
        {' '}
        Email{' '}
        <input
          type='email'
          name='userEmail'
          value={email}
          onChange={hendlerChange}
        />
      </label>
      <label>
        {' '}
        Password
        <input
          type='password'
          name='userPassword'
          value={password}
          onChange={hendlerChange}
        />
      </label>
      <label>
        {' '}
        Password
        <input
          type='password'
          name='controlPassword'
          value={controlPassword}
          onChange={hendlerChange}
        />
      </label>
      <button type='submit'>Registr</button></SC.WrapperForm>
    </form>
  )
}

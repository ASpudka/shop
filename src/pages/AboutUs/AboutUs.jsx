import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegClock } from 'react-icons/fa'
import { LuShoppingCart } from 'react-icons/lu'
import * as SC from '../Pages.styled'

export default function AboutUs () {
  return (
    <>
      <SC.HeaderPage>AboutUs</SC.HeaderPage>

      <SC.Wrapper>
        <SC.AboutUsList>
          <SC.InfoPage>
            <AiOutlineLike />
            we have 95% satisfied customers
          </SC.InfoPage>
        </SC.AboutUsList>
        <SC.AboutUsList>
          <SC.InfoPage>
            <FaRegClock /> we work 7 day a week
          </SC.InfoPage>
        </SC.AboutUsList>
        <SC.AboutUsList>
          <SC.InfoPage>
            <LuShoppingCart /> the goods are shipped on the same day
          </SC.InfoPage>
        </SC.AboutUsList>
      </SC.Wrapper>
    </>
  )
}

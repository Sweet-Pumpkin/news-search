// react
import React from 'react'
// style
import { TitleStyle } from '../styles/TitleStyle'

export default function Title() {
  return (
    <TitleStyle>
      <div className="title">
        <h1 className="name">The News Search</h1>
        <h3 className="sub">NewYorkTimes Article Search</h3>
        <hr />
      </div>
    </TitleStyle>
  )
}

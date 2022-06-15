// react
import React from 'react'
// react-router
import { Link } from 'react-router-dom'
// style
import { HeaderStyle } from '../styles/HeaderStyle';

export default function Header() {
  return (
    <HeaderStyle>
      <div className="header">
        <Link className="search" to="/">Search</Link>
        <Link className="clips" to="/url">My Clips</Link> 
      </div>
    </HeaderStyle>
  )
}
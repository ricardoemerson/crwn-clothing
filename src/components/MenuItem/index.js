import React from 'react'
import { Container } from './styles'

const MenuItem = ({ title, imageUrl, size }) => (
  <Container imageUrl={ imageUrl } size={ size } className={ `${ size }` }>
    <div className="background-image" />
    <div className="content">
      <h1 className="title">{ title.toUpperCase() }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </Container>
)

export default MenuItem

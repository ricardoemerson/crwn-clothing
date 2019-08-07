import React from 'react'
import { withRouter } from 'react-router-dom'

import { Container } from './styles'

const MenuItem = ({
  title, imageUrl, size, linkUrl, history, match,
}) => (
  <Container
    imageUrl={ imageUrl }
    size={ size }
    className={ `${ size }` }
    onClick={ () => history.push(`${ match.url }${ linkUrl }`) }
  >
    <div className="background-image" />
    <div className="content">
      <h1 className="title">{ title.toUpperCase() }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </Container>
)

export default withRouter(MenuItem)

import React, { Component } from 'react'

import { Container } from './styles'
import MenuItem from '../MenuItem/index'

class DirectoryMenu extends Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'hats',
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: '',
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: '',
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: '',
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: '',
      },
    ],
  }

  render() {
    const { sections } = this.state
    return (
      <Container>
        {
          sections.map(({ id, ...sectionProps }) => (
            <MenuItem key={ id } { ...sectionProps } />
          ))
        }
      </Container>
    )
  }
}

export default DirectoryMenu

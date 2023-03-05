import React from 'react'
import { Container } from 'react-bootstrap'
import CarouselRc from '../../features/Carousel/CarouselRc'
import ImageBox from '../../views/ImageBox/ImageBox'

const Home = () => {
  return (
    <Container>
      <CarouselRc />
      <ImageBox />
    </Container>
  )
}

export default Home

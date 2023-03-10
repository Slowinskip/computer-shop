import React from 'react'
import { Container } from 'react-bootstrap'
import CarouselRc from '../../features/Carousel/CarouselRc'
import FeatureProducts from '../../features/FeatureProducts/FeatureProducts'
import ImageBox from '../../views/ImageBox/ImageBox'

const Home = ({ updateCart }) => {
  return (
    <Container>
      <CarouselRc />
      <ImageBox />
      <FeatureProducts updateCart={updateCart} />
    </Container>
  )
}

export default Home

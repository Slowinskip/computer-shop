import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import styles from './CarouselRc.module.scss'
import Button from 'react-bootstrap/Button'

const CarouselRc = () => {
  return (
    <Container>
      <Carousel fade className={styles.carousel}>
        <Carousel.Item className={styles.carouselItem}>
          <img
            className="d-block w-100 "
            src=".\image\carousel\amd.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={styles.content}>
            <div>
              <h3>New AMD</h3>
              <div className="d-flex justify-content-center align-items-center ">
                <p className="px-4 m-0 ">
                  Highest performance, latest technology
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <img
            className="d-block w-100"
            src=".\image\carousel\deskop.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption className={styles.content}>
            <div>
              <h3>Your surroundings matter</h3>
              <div className="d-flex justify-content-center align-items-center ">
                <p className="px-4 m-0 ">Personalize your workplace</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <img
            className="d-block w-100"
            src=".\image\carousel\giga.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className={styles.content}>
            <div>
              <h3>Unbeatable performance</h3>
              <div className="d-flex justify-content-center align-items-center ">
                <p className="px-4 m-0 ">
                  The new Gigabyte product showed class
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default CarouselRc

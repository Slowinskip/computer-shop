import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './About.module.scss'

const About = () => {
  return (
    <Container>
      <Row className={styles.root}>
        <h2>About us</h2>

        <Col md={12} lg={6} className={styles.col1}>
          <p>
            Nunc gravida mauris sed tellus vulputate, at blandit turpis semper.
            Phasellus eu ipsum a nunc tempus scelerisque vitae vitae neque.
            Donec sagittis aliquet maximus. Sed sodales tortor id sapien
            molestie, sed pellentesque leo egestas. Pellentesque in lacus sit
            amet tellus vulputate fermentum quis vel magna. Vestibulum convallis
            a mauris vel tempus. Pellentesque tempus justo at imperdiet sodales.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            molestie augue. Ut ac luctus neque, ut venenatis leo.
          </p>
        </Col>
        <Col md={12} lg={6} className={styles.col2}>
          <img src={`./image/about/about-1.jpg`}></img>
          <img src={`./image/about/about-2.jpg`}></img>
          <img src={`./image/about/about-4.jpg`}></img>
          <img src={`./image/about/about-5.jpg`}></img>
        </Col>
        <Col md={12} lg={6} className={styles.col3}>
          <img src={`./image/about/about-6.jpg`}></img>
        </Col>
        <Col md={12} lg={6} className={styles.col4}>
          <p>
            Sed nec libero eu elit accumsan consectetur. Nulla ac nunc vehicula,
            varius massa aliquet, blandit nisl. Pellentesque lorem augue,
            molestie ut mattis eu, dignissim et diam. Donec dapibus, lorem ac
            cursus pretium, nulla tortor elementum purus, nec imperdiet neque
            nisi a dolor. Nullam et massa vel metus euismod pharetra sed vitae
            orci. Mauris non purus congue, sagittis enim vel, efficitur nibh.
            Duis faucibus nibh vel metus fermentum interdum.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About

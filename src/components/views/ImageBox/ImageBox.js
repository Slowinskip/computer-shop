import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ImageBox.module.scss'
import { GiAutoRepair } from 'react-icons/gi'
import { MdContactSupport } from 'react-icons/md'
import { HiDesktopComputer } from 'react-icons/hi'

const ImageBox = () => {
  return (
    <Container>
      <Row className="justify-content-around">
        <Col md={12} lg={4} className={styles.infoBox}>
          <div className={'col-3 ' + styles.icon}>
            <GiAutoRepair />
          </div>
          <div className={'col-9 ' + styles.content}>
            We undertake repairs of each computer and guarantee its collection
            after 48 hours
          </div>
        </Col>
        <Col md={12} lg={4} className={styles.infoBox}>
          <div className={'col-3 ' + styles.icon}>
            <HiDesktopComputer />
          </div>
          <div className={'col-9 ' + styles.content}>
            With us you can personalize your computer without leaving home
          </div>
        </Col>
        <Col md={12} lg={4} className={styles.infoBox}>
          <div className={'col-3 ' + styles.icon}>
            <MdContactSupport />
          </div>
          <div className={'col-9 ' + styles.content}>
            Have questions? We are at your disposal 24/7
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ImageBox

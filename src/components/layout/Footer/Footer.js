import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Footer.module.scss'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col
            sm={12}
            md={6}
            lg={4}
            className={
              'd-flex align-items-center justify-content-around ' + styles.links
            }
          >
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact us</a>
            <a href="/returns">Returns</a>
            <a href="/payment">Payment methods</a>
          </Col>
          <Col sm={12} md={6} lg={4} className={'' + styles.media}>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className={styles.twitter}
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className={styles.facebook}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className={styles.instagram}
            >
              <BsInstagram />
            </a>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={4}
            className={
              'd-flex align-items-center justify-content-around ' + styles.links
            }
          >
            <h6>Copyright © 2023 "1-2-SHOE" Store. All Rights Reserved</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer

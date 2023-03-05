import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import styles from './TopBar.module.scss'
import { BsPerson, BsPersonPlus } from 'react-icons/bs'
const TopBar = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.container}>
        <Nav className={'justify-content-end ' + styles.nav}>
          {' '}
          <Nav.Item>
            <Nav.Link href="/" style={{ color: '#f39c12' }}>
              <p className="m-0 p-0">Home</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" style={{ color: '#f39c12' }}>
              <p className="m-0 p-0">About us</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {' '}
            <Nav.Link href="/login" style={{ color: '#f39c12' }}>
              <p className="m-0 p-0">
                <BsPerson /> Login
              </p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {' '}
            <Nav.Link href="/register" style={{ color: '#f39c12' }}>
              <p className="m-0 p-0">
                <BsPersonPlus /> Register
              </p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  )
}

export default TopBar

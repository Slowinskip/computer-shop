import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import styles from './TopBar.module.scss'
import { BsPerson, BsPersonPlus } from 'react-icons/bs'
const TopBar = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || [],
  )

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [user])

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
          {user ? (
            ''
          ) : (
            <Nav.Link href="/login" style={{ color: '#f39c12' }}>
              <p className="m-0 p-0">
                <BsPerson /> Login
              </p>
            </Nav.Link>
          )}
          <Nav.Item></Nav.Item>
          <Nav.Item>
            {user ? (
              ''
            ) : (
              <Nav.Link href="/register" style={{ color: '#f39c12' }}>
                <p className="m-0 p-0">
                  <BsPersonPlus /> Register
                </p>
              </Nav.Link>
            )}
          </Nav.Item>
          <Nav.Item>
            {user ? (
              <Nav.Link href="/logout" style={{ color: '#f39c12' }}>
                <p className="m-0 p-0">Logout</p>
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  )
}

export default TopBar

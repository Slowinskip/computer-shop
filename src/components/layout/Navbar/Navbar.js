import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import styles from './Navbar.module.scss'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { BsCart, BsSearch } from 'react-icons/bs'
const NavBar = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || [],
  )
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || [],
  )

  useEffect(() => {
    if (cart.length !== 0) {
      setCart(JSON.parse(localStorage.getItem('cart')))
      getLength()
    }
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [cart])

  function getLength() {
    let total = 0
    cart.forEach((item) => {
      total = total + 1
    })

    return total
  }
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <div class={styles.logo_div}>
            <button href="/">
              Comp-<span>Shop</span>
            </button>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={'justify-content-end ' + styles.colapse}
        >
          <Col className="col-3">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className={'me-2 '}
              />
              <Button className={styles.bnt} variant="outline-secondary">
                <BsSearch />
              </Button>
            </Form>
          </Col>
          <Col className="col-1">
            <Link
              to="/cart"
              className={'d-flex align-items-center justify-content-around '}
            >
              <Button className={styles.bnt} variant="outline-secondary">
                <BsCart />
              </Button>
            </Link>
          </Col>
          <Col className={'col-1 '}>
            <p
              className={
                'd-flex align-items-center justify-content-center m-0  ' +
                styles.cartLenght
              }
            >
              {getLength() || 0}
            </p>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

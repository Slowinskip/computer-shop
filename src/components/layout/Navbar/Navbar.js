import React from 'react'
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap'
import styles from './Navbar.module.scss'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { BsCart, BsSearch } from 'react-icons/bs'
const NavBar = () => {
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <div class={styles.logo_div}>
            <button href="/">Comp-Shop</button>
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
          <Col className={'col-2 '}>
            <p
              className={
                'd-flex align-items-center justify-content-center m-0 ' +
                styles.cartLenght
              }
            >
              0
            </p>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

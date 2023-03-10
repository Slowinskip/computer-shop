import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCart, removeCart } from '../../../redux/cartRedux'
import styles from './Cart.module.scss'
import { TiDelete } from 'react-icons/ti'
const Cart = ({ updateCart }) => {
  const [cartData, setCartData] = useState(useSelector(getCart))
  console.log(cartData)
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || '',
  )
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let tempCart = cart.filter((item) => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(tempCart))
    setCartData(tempCart)
    updateCart()
    dispatch(removeCart(id))
  }

  function getTotalPrice() {
    let totalPrice = parseFloat(0)
    cartData.forEach((product) => {
      totalPrice = totalPrice + parseFloat(product.product.price)
    })
    return totalPrice
  }
  return (
    <Container className={styles.root}>
      <h1 className={styles.title}>Cart</h1>
      <Row>
        <Col lg={9}>
          <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            {cartData.length === 0 ? (
              <h2 className="py-5">Cart is empty</h2>
            ) : (
              cartData.map((product) => {
                return (
                  <tbody>
                    <tr>
                      <td className="col-3 ">
                        <img
                          src={`./image/productImage/${product.product.image[0]}.jpg`}
                          alt="product"
                          className={'d-block ' + styles.left_image}
                        />
                      </td>
                      <td className="col-3 py-5">{product.product.name}</td>
                      <td className="col-1 py-5">{product.product.price}$</td>
                      <td className={'col-1 py-5 ' + styles.icon}>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className={styles.button}
                        >
                          <TiDelete className={styles.icon} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                )
              })
            )}
          </Table>
        </Col>
        {cartData.length === 0 ? (
          <></>
        ) : (
          <Col className={styles.summary} lg={3}>
            <h3>Summary</h3>
            <h5>Total price: {getTotalPrice()} $</h5>
            {user ? (
              <Link className={styles.link} to="/order">
                <Button
                  type="submit"
                  variant="outline-secondary"
                  size="lg"
                  className={'mx-3 my-4 ' + styles.bnt}
                >
                  Submit Order
                </Button>
              </Link>
            ) : (
              <p>Log in to confirm your order</p>
            )}
          </Col>
        )}
      </Row>
    </Container>
  )
}
export default Cart

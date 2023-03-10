import React, { useState } from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../../redux/productsRedux'
import styles from './ProductPage.module.scss'
import shortid from 'shortid'
import { addCart } from '../../../redux/cartRedux'
const ProductPage = ({ updateCart }) => {
  const { id } = useParams()
  const product = useSelector((state) => getProductsById(state, id))
  const [activePhoto, setActivePhoto] = useState(product.image[0])
  const [status, setStatus] = useState('')
  console.log(activePhoto)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    const data = { id: shortid(), product }
    dispatch(addCart(data))
    console.log(data)
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '[]')
    }
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.push(data)
    localStorage.setItem('cart', JSON.stringify(cart))
    setStatus('succes')
    updateCart()
  }

  return (
    <div className={styles.separate}>
      <Container>
        <Row className={'mb-5 ' + styles.root}>
          <Col xs={4} md={4} lg={2} className="flex-column">
            {product.image.map((item) => (
              <div className={styles.gallery} key={item}>
                <button
                  className={
                    item === activePhoto
                      ? styles.gallery_active
                      : styles.gallery_button
                  }
                  onClick={() => setActivePhoto(item)}
                >
                  <img
                    src={`../image/productImage/${item}.jpg`}
                    className={styles.gallery_thumbnail}
                    alt="product"
                  />
                </button>
              </div>
            ))}
          </Col>
          <Col xs={8} md={8} lg={4}>
            <img
              src={`../image/productImage/${activePhoto}.jpg`}
              alt="products"
              className={'d-block ' + styles.left_image}
            />
          </Col>
          <Col xs={12} md={12} lg={6} className={styles.right_details}>
            <h2>{product.name}</h2>
            <h4>
              {product.oldPrice > 0 ? (
                <span>
                  <span className={styles.new_price}>
                    Now ${product.price}!
                  </span>{' '}
                  <span className={styles.old_price}>${product.oldPrice}</span>
                </span>
              ) : (
                <span className={styles.new_price}>${product.price}</span>
              )}
            </h4>
            <p className={styles.product_description}>{product.information}</p>
            <Button className={styles.button} onClick={handleSubmit}>
              Add to Card
            </Button>
            {status === 'succes' && (
              <Alert variant="success" className="mt-3">
                <Alert.Heading>Add to cart</Alert.Heading>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductPage

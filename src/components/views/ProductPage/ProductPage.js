import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../../redux/productsRedux'
import styles from './ProductPage.module.scss'

const ProductPage = () => {
  const { id } = useParams()
  const product = useSelector((state) => getProductsById(state, id))
  const [activePhoto, setActivePhoto] = useState(product.image[0])
  console.log(activePhoto)

  const handleSubmit = () => {}

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
            <Button className={styles.button} onClick={handleSubmit()}>
              Add to Card
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductPage

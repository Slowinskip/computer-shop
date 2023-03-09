import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './ProductBox.module.scss'
import { BsCart } from 'react-icons/bs'

const ProductBox = (props) => {
  const handleSubmit = () => {}

  return (
    <Card className={styles.card} style={{ backgroundColor: '#d35400' }}>
      <Card.Img
        className={styles.cardImage}
        variant="top"
        src={`./image/productImage/${props.image[0]}.jpg`}
      ></Card.Img>
      <Card.Body className="text-center">
        <Card.Title className={styles.cardTitle}>{props.name}</Card.Title>
        <Card.Text className="m-0">
          {props.oldPrice > 0 ? (
            <div className={'d-flex justify-content-center ' + styles.priceDiv}>
              <span className={styles.price}>${props.price}</span>
              <span className={styles.oldPrice}>${props.oldPrice}</span>
            </div>
          ) : (
            <div className={'d-flex justify-content-center ' + styles.priceDiv}>
              <span className={styles.normalPrice}>${props.price}</span>
            </div>
          )}
        </Card.Text>
        <Col className={''}>
          <Link to={'/product/' + props.id}>
            <Button
              variant="outline-secondary"
              size="sm"
              className={'mt-3 mx-2 ' + styles.cardButton}
            >
              View more
            </Button>
          </Link>
          <Button
            className={'mt-3 mx-2 ' + styles.cardButton}
            variant="outline-secondary"
            onClick={handleSubmit()}
          >
            <BsCart />
          </Button>
        </Col>
      </Card.Body>
    </Card>
  )
}

export default ProductBox

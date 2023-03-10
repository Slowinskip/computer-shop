import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Summary.module.scss'

const Summary = () => {
  return (
    <div className="my-5 text-center">
      <Container className={styles.container}>
        <h1 className="py-5">Thank you for your order</h1>
        <h3 className="py-5">
          We will deliver them to the indicated address as soon as possible
        </h3>
      </Container>
    </div>
  )
}

export default Summary

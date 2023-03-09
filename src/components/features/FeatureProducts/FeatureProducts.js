import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './FeatureProducts.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import {
  getProducts,
  getProductsComputer,
  getProductsKayboardAndMouse,
} from '../../../redux/productsRedux'
import ProductBox from '../../common/ProductBox/ProductBox'

const FeatureProducts = () => {
  const allProducts = useSelector(getProducts)
  const computerProducts = useSelector(getProductsComputer)
  const keyAndMouseProducts = useSelector(getProductsKayboardAndMouse)
  return (
    <Row>
      <Tabs>
        <Col className={'text-center mt-3'}>
          <TabList className={'mt-5 ' + styles.tabList}>
            <Tab className={styles.tab}>All</Tab>
            <Tab className={styles.tab}>Computers</Tab>
            <Tab className={styles.tab}>Mice and keyboards</Tab>
          </TabList>
        </Col>
        <Container>
          <div className={styles.container}>
            <TabPanel>
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {allProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
            <TabPanel>
              {' '}
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {computerProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
            <TabPanel>
              {' '}
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {keyAndMouseProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
          </div>
        </Container>
      </Tabs>
    </Row>
  )
}

export default FeatureProducts
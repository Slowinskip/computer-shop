import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './FeatureProducts.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const FeatureProducts = () => {
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
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </div>
        </Container>
      </Tabs>
    </Row>
  )
}

export default FeatureProducts

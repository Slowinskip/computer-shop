import React, { useState } from 'react'
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import shortid from 'shortid'
import { getUserByLogin } from '../../../redux/userRedux'
import styles from './Login.module.scss'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(null)
  const navigate = useNavigate()
  const userCheck = useSelector((state) => getUserByLogin(state, login))
  const handleSubmit = (e) => {
    e.preventDefault()
    if (login.length < 6 || password < 6) {
      setStatus('dataError')
      return
    } else if (!userCheck) {
      setStatus('clientError')
      return
    } else if (userCheck.password !== password) {
      setStatus('clientError')
      return
    }
    const data = { id: shortid(), login }

    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', '[]')
    }
    let user = JSON.parse(localStorage.getItem('user'))
    localStorage.setItem('user', JSON.stringify(data))
    setStatus('success')
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }
  return (
    <Container className={styles.container}>
      <Form
        className={'col-12 col-md-4 mx-auto my-5 pb-5 ' + styles.form}
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>{' '}
        <p>
          To log in, you can use the following data: login: "TestUser" password:
          "testuser''
        </p>
        {status === 'dataError' && (
          <Alert variant="danger">
            <Alert.Heading>Incorrect data</Alert.Heading>
            <p>
              Login or password is too short. You must use at least 6 characters
            </p>
          </Alert>
        )}
        {status === 'clientError' && (
          <Alert variant="danger">
            <Alert.Heading>Incorrect data</Alert.Heading>
            <p>Login or password are incorrect.</p>
          </Alert>
        )}
        {status === 'loading' && (
          <Spinner animation="border" role="status" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {status === 'success' && (
          <Alert variant="success">
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have been successfully logged in!</p>
          </Alert>
        )}
        <Form.Group>
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            required={true}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-around ">
          <Button variant="primary" type="submit" className={styles.bnt}>
            Sign in
          </Button>
          <Button variant="primary" href="/register" className={styles.bnt}>
            Want an account?
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default Login

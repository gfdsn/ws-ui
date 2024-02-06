import React, { FormEvent, useState } from 'react'
import Header from '../Header'
import { Button, Form } from 'react-bootstrap'
import './styles/index.css'
import axios from '../../axiosConfig'

export default function Login() {

  const [userInfo, setUserInfo] = useState({})

  const handleUserInfoUpdate = (event: any) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    })
  }

  const handleLoginFormSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await axios.post('/login', userInfo)
      .then(res => localStorage.setItem('token', res.data.token));
  }

  return (
    <>
      <Header />
      <section>
        <Form style={{marginTop: '-20vh'}} onSubmit={handleLoginFormSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleUserInfoUpdate} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" onChange={handleUserInfoUpdate} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>

        </Form>
      </section>
    </>
  )
}

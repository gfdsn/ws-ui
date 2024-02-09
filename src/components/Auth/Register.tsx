import React, { FormEvent, useContext, useState } from 'react'
import Header from '../Header'
import { Button, Form } from 'react-bootstrap'
import './styles/index.css'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const [userInfo, setUserInfo] = useState({})
  const {register} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleUserInfoUpdate = (event: any) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    })
  }

  const handleRegFormSubmit = async (event: FormEvent) => {
    event.preventDefault()

    register(userInfo)
    navigate('/login')
      
  }

  return (
    <>
      <Header />
      <section>
        <Form style={{marginTop: '-20vh'}} onSubmit={handleRegFormSubmit}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Enter name" onChange={handleUserInfoUpdate} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleUserInfoUpdate} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" onChange={handleUserInfoUpdate} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" name='confirmPassword' placeholder="Password" onChange={handleUserInfoUpdate} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>

        </Form>
      </section>
    </>
  )
}

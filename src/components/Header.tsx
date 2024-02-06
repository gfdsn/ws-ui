import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router'

type RoomHeaderProps = {
  roomId?: number
}

export default function Header({roomId}: RoomHeaderProps) {

  const navigate = useNavigate();

  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark" style={{height: '10vh'}}> 
      <Container>
        <Navbar.Brand href="/">{roomId ? `Rooms #${roomId}` : 'Chat Rooms'}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Signed in as: <a href="#login">Mark Otto</a> */}
            <Button variant="secondary" onClick={() => navigate('/login')} style={{marginRight: '15px'}}>Login</Button>
            <Button variant="secondary" onClick={() => navigate('/register')}>Register</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

type RoomHeaderProps = {
  roomId?: number
}

export default function Header({roomId}: RoomHeaderProps) {
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark"> 
      <Container>
        <Navbar.Brand href="/">{roomId ? `Rooms #${roomId}` : 'Chat Rooms'}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

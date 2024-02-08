import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'

type RoomHeaderProps = {
  roomId?: number
}

export default function Header({roomId}: RoomHeaderProps) {

  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const {user} = useContext(AuthContext)

  return (
    <Navbar style={{backgroundColor: '#1e293b', height: '10vh'}}> 
      <Container>
        <Navbar.Brand style={{color: '#fff'}}>{roomId ? `Rooms #${roomId}` : 'Chat Rooms'}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          {
            token ?
                <div className='d-flex align-items-center'>
                  <div className='mx-3'>Signed in as: <span style={{color: "#fff"}}>{user?.name}</span></div>
                  <Button variant="secondary" onClick={() => navigate('/logout')}>Logout</Button>
                </div>
              :
              (
                <div>
                  <Button variant="secondary" onClick={() => navigate('/login')} style={{marginRight: '15px'}}>Login</Button>
                  <Button variant="secondary" onClick={() => navigate('/register')}>Register</Button>
                </div>
              )
          }
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

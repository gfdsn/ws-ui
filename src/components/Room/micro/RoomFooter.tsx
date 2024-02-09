import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { RoomFooterProps } from '../../../types/Props';
import { FaLocationArrow } from "react-icons/fa";

export default function RoomFooter({ws, user}: RoomFooterProps) {
  
  const [msg, setMsg] = useState<string>('');

  const sendMsg = () => {
    if (user) {
      ws.sendJsonMessage({message: msg, authorId: user._id, createdAt: new Date()});
      setMsg('');
    }
  };

  return (
    <footer className='footer d-flex justify-content-center align-items-center p-3' style={{backgroundColor: '#1f2937', height: '10vh'}}>
      <InputGroup className="w-50 mx-5">
        <Form.Control
          placeholder="Message..."
          aria-label="message"
          onChange={event => setMsg(event.target.value)} 
        />
      </InputGroup>
      <button onClick={sendMsg} type="button" className="btn btn-secondary">
        <FaLocationArrow color='#fff' />
      </button>
    </footer>
  )
}

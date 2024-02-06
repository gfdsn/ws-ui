import React, { useState } from 'react'
import { useParams } from 'react-router'
import Header from '../Header';
import useWebSocket from 'react-use-websocket';
import { Button } from 'react-bootstrap';

export default function Room() {

  const params = useParams()
  const roomId = params.id;

  const [msg, setMsg] = useState("");
  const {sendMessage} = useWebSocket(`ws://localhost:8080/chatapp/room/${roomId}`, {
    onOpen: () => {console.log("connected"); sendMessage("conectei fi")},
    onMessage: (message: WebSocketEventMap['message']) => console.log(message.data),
    onClose: () => sendMessage("vazei fi"),
    onError: error => console.log("WebSocket Error:", error),
  })

  const sendMsg = () => {
    sendMessage(msg)
  }

  return (
    <>
      <Header roomId={Number(roomId)}/>
      <input type='text' id='message' onChange={event => setMsg(event.target.value)} />
      <Button onClick={sendMsg}>Send message</Button>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../Header';
import useWebSocket from 'react-use-websocket';
import { Button } from 'react-bootstrap';

interface Message {
  _id: string,
  authorId: string,
  roomId: string,
  message: string
}

export default function Room() {

  const params = useParams()
  const roomId = params.id;

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState<Message[]>([])
  const [previousMessagesRecieved, setPreviousMessagesRecieved] = useState<boolean>(false);

  const { sendMessage } = useWebSocket(`ws://localhost:8080/chatapp/room/${roomId}`, {
    onOpen: () => { console.log("connected");   },
    onMessage: (message: WebSocketEventMap['message']) => {
      const roomMessages = JSON.parse(message.data);

      /* TO-DO fix this */
      if (!previousMessagesRecieved) {
        setMessages(prevMessages => [...prevMessages, ...roomMessages]); 
        setPreviousMessagesRecieved(true)
      } else setMessages(prevMessages => [...prevMessages, roomMessages]) 

    },
    onError: error => { console.log("WebSocket Error:", error); },
  });
  
  const sendMsg = () => sendMessage(msg)

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <>
      <Header roomId={Number(roomId)}/>
      {
        messages &&
        messages.map(message => (
          <p>{message.message}</p>
        ))
      }
      <input type='text' id='message' onChange={event => setMsg(event.target.value)} />
      <Button onClick={sendMsg}>Send message</Button>
    </>
  )
}

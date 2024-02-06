import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header';
import useWebSocket from 'react-use-websocket';
import { Button } from 'react-bootstrap';

interface Message {
  _id: string;
  authorId: string;
  roomId: string;
  message: string;
}

export default function Room() {
  const { id: roomId } = useParams<{ id: string }>();

  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [previousMessagesReceived, setPreviousMessagesReceived] = useState<boolean>(false);

  const { sendMessage } = useWebSocket(`ws://localhost:8080/chatapp/room/${roomId}`, {
    onOpen: () => console.log('connected'),
    onMessage: (message: WebSocketEventMap['message']) => {
      const roomMessages = JSON.parse(message.data);

      if (!previousMessagesReceived){
        setMessages(prevMessages => [...prevMessages, ...roomMessages]);
        setPreviousMessagesReceived(true);

      } else setMessages(prevMessages => [...prevMessages, roomMessages]);

    },
    onError: error => console.log('WebSocket Error:', error),
  });

  const sendMsg = () => {
    sendMessage(msg);
    setMsg('');
  };

  return (
    <>
      <Header roomId={Number(roomId)} />
      {messages.map((message, index) => (
        <p key={index}>{message.message}</p>
      ))}
      <input type="text" id="message" value={msg} onChange={event => setMsg(event.target.value)} />
      <Button onClick={sendMsg}>Send messages</Button>
    </>
  );
}

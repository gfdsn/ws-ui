import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header';
import useWebSocket from 'react-use-websocket';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import RoomFooter from './micro/RoomFooter';
import { Message } from '../../types/Message';
import MessageList from './micro/MessageList';

export default function Room() {
  const { id: roomId } = useParams<{ id: string }>();

  const [messages, setMessages] = useState<Message[]>([]);
  const [previousMessagesReceived, setPreviousMessagesReceived] = useState<boolean>(false);
  const {user} = useContext(AuthContext)

  const ws = useWebSocket(`ws://localhost:8080/chatapp/room/${roomId}`, {
    onOpen: () => console.log('connected'),
    onMessage: (message: WebSocketEventMap['message']) => {
      const roomMessages = JSON.parse(message.data);

      if (!previousMessagesReceived){
        setMessages(roomMessages);
        setPreviousMessagesReceived(true);

      } else setMessages(prevMessages => [...prevMessages, roomMessages]);

    },
    onError: error => console.log('WebSocket Error:', error),
  });

  useEffect(() => {
    console.log(messages);
  }, [messages])
  
  return (
    <>
      <Header roomId={Number(roomId)} />
      <MessageList messages={messages} user={user} />
      <RoomFooter ws={ws} user={user} />
    </>
  );
}

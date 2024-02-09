import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header';
import useWebSocket from 'react-use-websocket';
import { AuthContext } from '../../contexts/AuthContext';
import RoomFooter from './micro/RoomFooter';
import { Message } from '../../types/Message';
import MessageList from './micro/MessageList';

export default function Room() {
  const { id: roomId } = useParams<{ id: string }>();
  const scrollTo = useRef<HTMLDivElement>(null); 

  const [messages, setMessages] = useState<Message[]>([]);
  const [previousMessagesReceived, setPreviousMessagesReceived] = useState<boolean>(false);
  const {user} = useContext(AuthContext)

  const ws = useWebSocket(`ws://localhost:8080/chatapp/room/${roomId}`, {
    onOpen: () => console.log('connection opened'),
    onMessage: (message: WebSocketEventMap['message']) => {
      const newMessages = JSON.parse(message.data);
  
      if (!previousMessagesReceived) {
        setMessages(newMessages);
        setPreviousMessagesReceived(true);
      } else {
        setMessages(prevMessages => {
          // only add no repeated ones
          const newMsgs = newMessages.filter((message: Message) => 
            !prevMessages.some(prevMessage => prevMessage._id === message._id)  
          );
          return [...prevMessages, ...newMsgs];
        });
        scrollTo.current?.scrollIntoView({block: 'end', behavior: 'smooth'})
      }
    },
    onError: error => console.log('WebSocket Error:', error),
  });

  return (
    <>
      <Header roomId={Number(roomId)} />
      <MessageList messages={messages} user={user} />
      <div ref={scrollTo}></div>
      <RoomFooter ws={ws} user={user} />
    </>
  );
}

import React from 'react'
import { MessageListProps } from '../../../types/Props'

export default function MessageList({messages, user}: MessageListProps) {

  const currentDay = new Date().getDate();

  return (
    <div className='d-flex flex-column' style={{backgroundColor: '#334155', color: '#fff', height: '80vh', overflowY: 'auto'}}>
      {messages.map((message, index) => { 

          const messageCreatedAt = new Date(message.created_at);
          const messageCreatedAtDate = `${messageCreatedAt.toLocaleDateString().replaceAll('/', '-')} `
          const messageCreatedAtTime = `${messageCreatedAt.getHours()}:${messageCreatedAt.getMinutes()}`
          const formattedDate = `${messageCreatedAtDate} at ${messageCreatedAtTime}`

          const timestampDisplay = currentDay === messageCreatedAt.getDate() ? messageCreatedAtTime : formattedDate;
          
          return (
            <div className='my-2 mx-5 rounded p-2' style={{
              maxWidth: '40%',
              wordWrap: 'break-word',
              backgroundColor: message.authorId == user?._id ? "#a3a3a3" : "#94a3b8", 
              alignSelf: message.authorId == user?._id ? "end" : "start"
            }}>
              <span className='' style={{color: '#1e293b'}}>{user?.name}</span>
              <p className='my-2' key={index}>{message.message}</p>
              <span className='' style={{color: '#1e293b', fontSize: '13px'}}>{timestampDisplay}</span> 
            </div>
          )
        }
      )}
    </div>
  )
}

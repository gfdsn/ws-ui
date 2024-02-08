import React from 'react'
import { MessageListProps } from '../../../types/Props'
import { Message } from '../../../types/Message';

export default function MessageList({messages, user}: MessageListProps) {

  const currentDay = new Date().getDate();

  function formatSingleNums(numberToFormat: number): string {
    return numberToFormat < 10 ? `0${numberToFormat}` : `${numberToFormat}`
  }

  function formatCreatedAt(message: Message) {
    const messageCreatedAt = new Date(message.created_at);
    const messageCreatedAtDate = `${messageCreatedAt.toLocaleDateString().replaceAll('/', '-')} `
    const messageCreatedAtTime = `${formatSingleNums(messageCreatedAt.getHours())}:${formatSingleNums(messageCreatedAt.getMinutes())}`
    const formattedDate = `${messageCreatedAtDate} at ${messageCreatedAtTime}`

    return currentDay === messageCreatedAt.getDate() ? messageCreatedAtTime : formattedDate;
  }

  return (
    <div className='d-flex flex-column py-3' style={{backgroundColor: '#334155', color: '#fff', height: '80vh', overflowY: 'auto'}}>
      {messages.map((message, index) => { 

          const formattedCreatedAt = formatCreatedAt(message);
        
          return (
            <div key={index} className='my-2 mx-5 rounded px-2' style={{
              maxWidth: '40%',
              wordWrap: 'break-word',
              backgroundColor: message.authorId == user?._id ? "#a3a3a3" : "#94a3b8", 
              alignSelf: message.authorId == user?._id ? "end" : "start"
            }}>
              <span className='' style={{color: '#1e293b'}}>{user?.name}</span>
              <p className='my-2'>{message.message}</p>
              <span className='' style={{color: '#1e293b', fontSize: '13px'}}>{formattedCreatedAt}</span> 
            </div>
          )
        }
      )}
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router'
import Header from '../Header';

export default function Room() {

  const params = useParams()
  const roomId = params.id;

  return (
    <>
      <Header roomId={Number(roomId)}/>
    </>
  )
}

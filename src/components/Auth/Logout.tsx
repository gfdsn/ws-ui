import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Logout() {

  const {logout} = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    logout()
    navigate('/')
  })

  return <></>
}

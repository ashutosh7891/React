import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='text-content-center bg-gray-800 py-5 text-3xl text-white text-center'>User: {id}</div>
  )
}

export default User
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


const DeletePostButton = ({postId}) => {
const router = useRouter() 

  const handleClick = (postId) => {

    try {

      fetch(`api/post/${postId}`,{
        method : 'DELETE'
      })
      
      router.refresh()
    } catch (error) {
      console.log('>>>> error',error)
    }
  
  }
  return (
    <button onClick={()=> handleClick(postId)}>Delete Post</button>
  )
}

export default DeletePostButton
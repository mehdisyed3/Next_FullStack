'use client'
import React from 'react'


const DeletePostButton = ({postId}) => {

  const handleClick = (postId) => {

    try {

      fetch(`api/post/${postId}`,{
        method : 'DELETE'
      })
      
    } catch (error) {
      console.log('>>>> error',error)
    }
  
  }
  return (
    <button onClick={()=> handleClick(postId)}>Delete Post</button>
  )
}

export default DeletePostButton
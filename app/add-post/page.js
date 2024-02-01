'use client'

import React, { useState } from 'react'
import styles from '@/app/page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter()

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // You can perform any action with the title and content here,
    // such as sending it to a backend server or storing it locally.

    // try {
    //   await fetch('/api/add-post',{
    //     method:'POST',
    //     headers:{
    //       'Content-Type' : 'application/json'
    //     },
    //     body: JSON.stringify({title, content})
    //   })
      
    // } catch (error) {
    //   console.log('>>> ERRR',error)
    // }


  try {

    fetch('/api/add-post',{
      method:'POST',
      headers:{ 'Content-type': 'application/json'},
      body: JSON.stringify({title, content}) 
    })
    
  } catch (error) {
    console.log('>>> error',error)
  }

    // Reset the form fields
    setTitle('');
    setContent('');
    router.refresh()
  };

  return (
    <div className={styles.main}>
      <Link href='/' > GO TO FEED</Link>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddPost
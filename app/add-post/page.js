'use client'

import React, { useState } from 'react'
import styles from '@/app/page.module.css'

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the title and content here,
    // such as sending it to a backend server or storing it locally.
    console.log('>>>> Title:', title);
    console.log('>>>> Content:', content);
    // Reset the form fields
    setTitle('');
    setContent('');
  };

  return (
    <div className={styles.main}>
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
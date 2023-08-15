import React, { useState } from 'react'
import styles from './content.module.css'

const Content = ({ content }) => {
  const [likes, setLikes] = useState(0)

  return (
    <div>
      <h2>{content.summary}</h2>
      <p>{content.details}</p>
      <button onClick={() => setLikes(likes + 1)}>+ like!</button>
      <p>{likes}</p>
    </div>
  )
}

export default Content

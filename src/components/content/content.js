import React from 'react'
import styles from './content.module.css'

const Content = ({ content }) => {
  return (
    <div>
      <h2>{content.summary}</h2>
      <p>{content.details}</p>
    </div>
  )
}

export default Content

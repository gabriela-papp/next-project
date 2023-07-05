import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata={
  title:'Best Gitfs Contact Page',
  description:'Contact Page'
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Keep In Touch</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image 
        src='/jennifer-pallian-173719.jpg'
        alt=''
        fill={true}
        className={styles.image}
        /> 
      </div>
      <div className={styles.form}>
        <form action="">
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea className={styles.textArea} placeholder='Message...' cols="30" rows="10"></textarea>
          <Button url='#' text='Send'/>
        </form>
      </div>
      </div>  
    </div>
  )
}

export default Contact

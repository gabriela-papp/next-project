import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image/>
      </div>
      <div className={styles.txtContainer}></div>
    </div>
  )
}

export default About
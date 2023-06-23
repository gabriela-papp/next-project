import React from 'react'
import styles from './page.module.css'
import  Image from 'next/image'

const BlogPost
 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum error delectus illum dignissimos maxime, molestiae cumque. Labore voluptatibus sequi, incidunt alias minus ex maxime non rem ipsam aliquid beatae? Eaque!</p>
            <div className={styles.author}>
              <Image 
                src='/gift-thumbnail.jpg'
                alt=''
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.userName}>John Jones</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src='/pexels-photo-264803.jpeg'
              alt=''
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus omnis saepe, nesciunt vero sunt iste vel quasi perferendis veniam quaerat aliquam explicabo dicta atque ducimus assumenda officia porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Deleniti voluptatibus omnis saepe, nesciunt vero sunt iste vel quasi perferendis veniam quaerat aliquam explicabo dicta atque ducimus assumenda officia porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus omnis saepe, nesciunt vero sunt iste vel quasi perferendis veniam quaerat aliquam explicabo dicta atque ducimus assumenda officia porro.</p>
        </div>
    </div>
  )
}

export default BlogPost

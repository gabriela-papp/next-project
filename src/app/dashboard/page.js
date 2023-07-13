'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './dashboard.module.css'

const Dashboard
 = () => {
  const session = useSession()
  const router = useRouter()
  console.log(session)
  if(session.status === 'loading'){
    return <p>Loading...</p>
  }
  if(session.status === 'unauthenticated'){
    router?.push('/dashboard/login')
  }
  if(session.status === 'authenticated'){
     return (
    <div className={styles.container}>
        <div className={styles.posts}>
          {data.map((post)=>(
            <div className={styles.post}>
               <div className={styles.imgContainer}>
            <Image
              src={}
              alt='image'
            />
          </div>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <span className={styles.delete}>X</span>
            </div>
          ))}
         
        </div>
        <form className={styles.new} onSubmi={handleSubmit}>
          <h1>Add new post</h1>
          <input type="text" placeholder='Title' className={styles.input}/>
          <input type="text" placeholder='Desc' className={styles.input}/>
          <input type="text" placeholder='Image' className={styles.input}/>
          <textarea placeholder='Content' cols="30" rows="10" className={styles.textArea}></textarea>
          <button className={styles.button}>Send</button>
        </form>
    </div>
  )
  }
 
}

export default Dashboard

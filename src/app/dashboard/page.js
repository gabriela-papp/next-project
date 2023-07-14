'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useSWR from 'swr'
import styles from './dashboard.module.css'
import { POST } from '../api/posts/route'

const Dashboard
 = () => {
  const session = useSession()
  const router = useRouter()
  const fetcher =(...args)=> fetch(...args).then((res)=>res.json())
  const {data,error,isLoading}=useSWR(`/api/posts?username=${session?.data?.user.name}`,fetcher)
  console.log(data)

  if(session.status === 'loading'){
    return <p>Loading...</p>
  }

  if(session.status === 'unauthenticated'){
    router?.push('/dashboard/login')
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const title=e.target[0].value
    const desc=e.target[1].value
    const img=e.target[2].value
    const content=e.target[3].value
    try{
      await fetch('/api/posts',{
        method:'POST',
        body:JSON.stringify({
          title,desc,img,content,username:session.data.user.name
        })
      })
    }catch(err){
      console.log(err)
    }
  }
  if(session.status === 'authenticated'){
     return (
    <div className={styles.container}>
        <div className={styles.posts}>
          {data?.map((post)=>(
            <div className={styles.post} key={post.title}>
               <div className={styles.imgContainer}>
            <Image
              src={post.img}
              alt='image'
              width={200}
              height={100}
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

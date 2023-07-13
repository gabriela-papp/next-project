'use client'
import React from 'react'
import styles from './login.module.css'
import { signIn } from 'next-auth/react'

const Login= () => {

    const handleSubmit= async(e)=>{
    e.preventDefault()
    
    const email=e.target[0].value;
    const password=e.target[1].value;

    signIn('credentials',{email,password})
  }
  return (
    <div className={styles.container}>
           <form action="" className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder='email' className={styles.input} required/>
          <input type="password" placeholder='password' className={styles.input} required/>
          <button className={styles.button}>Login</button>
        </form>

        <button onClick={()=> signIn('google')} className={styles.button}>Login with Google</button>
    </div>
  )
}

export default Login

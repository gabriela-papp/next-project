import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import hero from '../../../public/gift-thumbnail.jpg'
import Button from '@/components/Button/Button'

export const metadata={
  title:'Best Gitfs',
  description:'Best Gifts For The Loved Ones'
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={hero} alt='background' fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Lorem ipsum dolor</h1>
          <h2 className={styles.imgDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            
          </h2>
        </div>
      </div>
      <div className={styles.txtContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}> Mollitia nihil eos pariatur iste</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto quas, ut dolor doloribus aliquid. Velit officia libero adipisci vero ipsum nesciunt aspernatur aliquid, odit quas, exercitationem illum eos tempore.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}> Mollitia nihil eos pariatur iste</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto quas, ut dolor doloribus aliquid. Velit officia libero adipisci vero ipsum nesciunt aspernatur aliquid, odit quas, exercitationem illum eos tempore.</p>
          <Button url='/contact' text='Contact Us'/>
        </div>
      </div>
    </div>
  )
}

export default About
import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/pexels-photo-122734.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        </h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus non cumque veniam quam, consequatur, beatae nemo adipisci maxime soluta dolores nisi harum amet totam commodi ullam laudantium aliquam. Nostrum!</p>
        <button className={styles.button}>See Our Work</button>
      </div>
      <div className={styles.item}>
       <Image src={hero} alt='home' className={styles.img}/>
      </div>
    </div>
  )
}

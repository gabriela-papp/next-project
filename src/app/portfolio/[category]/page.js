import React from 'react'
import styles from './category.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const Page = ({params}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>New Day</h1>
                <p className={styles.decs}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis illo cum, laboriosam ad nisi, omnis officia unde voluptatibus accusamus odio saepe vitae vel quasi? Sed deserunt magni tempore minus.</p>
                <Button text='See More' url='#'></Button>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    fill={true}
                    src='/pexels-photo-264917.jpeg'
                    alt='img'
                />
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>New Summer Flavors</h1>
                <p className={styles.decs}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus accusantium sed, voluptatibus rerum consequatur dignissimos repellat. </p>
                <Button text='See More' url='#'></Button>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    fill={true}
                    src='/pexels-photo-264960.jpeg'
                    alt='img'
                />
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Travel All Summer</h1>
                <p className={styles.decs}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni cupiditate quidem numquam aut accusamus sapiente debitis reprehenderit a sit quia consequatur totam qui facere, tempora dolorem doloribus officiis impedit natus.</p>
                <Button text='See More' url='#'></Button>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    fill={true}
                    src='/pexels-photo-264803.jpeg'
                    alt='img'
                />
            </div>
        </div>
    </div>
  )
}

export default Page
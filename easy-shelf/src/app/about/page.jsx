import React from 'react'
import Image from 'next/image'
import Ben from 'public/Ben.jpg'
import styles from './about.module.css'
import Group_3 from 'public/Group-8.svg'

const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <Image src={Ben} width={500} alt='#' />
        <h1 className={styles.title}>This is Ben, and he suggested that we implement this <br /> great idea! This is a very kind and bright person who <br /> strives to make this world at least a little better!</h1>
      </div>
      <Image src={Group_3} width={1300} alt="#" className={styles.img_8} />
    </div>
  )
}

export default About

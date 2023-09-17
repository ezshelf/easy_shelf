import React from 'react'
import Link from 'next/link'
import styles from './header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.container}>
        <Image src="/logo.svg" width={70} height={70} alt="#" />
        <Link href='/'>Easy Shelf</Link>
    </div>
  )
}

export default Header

'use client'
import React from 'react'
import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {

    const links = [
        {
            id: 1,
            title: 'About us',
            url: '/about'
        },
        {
            id: 2,
            title: 'Download our app',
            url: '/download'
        },
        {
            id: 3,
            title: 'Donation',
            url: '/donation'
        }
    ]

  return (
    <div className={styles.container}>
      {
        links.map((link) => (
            <Link key={link.id} href={link.url}>{link.title}</Link>
        ))
      }
    </div>
  )
}

export default Footer

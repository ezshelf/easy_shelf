import React from 'react'
import styles from './donation.module.css'

const Donation = () => {
  return (
    <div className={styles.container}>
      <h1>Thank you for helping us recreate our idea!</h1>
      <input type="number" className={styles.form} placeholder='Введите желаемую сумму' />

      <button className={styles.submit}>Отправить</button>
      
      <div className={styles.btns} >
        <button className={styles.btn}>25$</button>
        <button className={styles.btn}>50$</button>
        <button className={styles.btn}>100$</button>
      </div>

      <p>You are helping millions of people make their lives much better!</p>

      Реквизиты: 
    </div>
  )
}

export default Donation

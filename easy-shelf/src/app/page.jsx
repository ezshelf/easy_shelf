import styles from './page.module.css'
import Group from 'public/Group-1.svg'
import Image from 'next/image'
import Image_2 from 'public/image-2.jpg'
import Group_2 from 'public/Group-2.svg'
import Image_3 from 'public/image-4.jpg'
import Image_4 from 'public/image-5.jpg'
import Image_5 from 'public/image-6.jpg'
import Group_3 from 'public/Group-8.svg'

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
          <div className={styles.item}>
            <h1 className={styles.title}>Simplify shoe <br /> access for disabled <br /> individuals</h1>
          </div>
          <div className={styles.imgContainer}>
            <Image src={Group} alt='#' className={styles.img} />
          </div>
      </div>

      <div className={styles.container}>
          <div className={styles.item}>
            <h1 className={styles.text}>Our smart shelf adjusts height, pulls <br /> out a shoe shelf, and secures it, <br /> making it convenient for disabled <br /> individuals to put on shoes</h1>
            <Image className={styles.img_3} src={Group_2} alt='#' />
          </div>
          <div className={styles.imgContainer}>
            <Image src={Image_2} width={300} height={300} alt='#' className={styles.img_2} />
          </div>
      </div>

      <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src={Image_3} alt='#' className={styles.img_5} />
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>Adjustable height for easy reach</h1>
            <h1 className={styles.text}>EasyShelfs smart design allows for <br /> adjustable height, ensuring that shoes are <br /> within easy reach for individuals with <br /> disabilities.</h1>
            <Image className={styles.img_4} src={Group_2} alt='#' />
          </div>
      </div>

      <div className={styles.container}>
          <div className={styles.item}>
            <h1 className={styles.title}>Pull-out shelf for easy <br /> access.</h1>
            <h1 className={styles.text}>The pull-out shoe shelf feature of <br /> EasyShelf provides easy access to <br /> shoes, eliminating the need for <br /> bending or stretching.</h1>
            <Image className={styles.img_6} src={Group_2} alt='#' />
          </div>

          <div className={styles.imgContainer}>
            <Image src={Image_4} alt='#' className={styles.img_5} />
          </div>
      </div>

      <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src={Image_5} alt='#' className={styles.img_7} />
          </div>

          <div className={styles.item}>
            <h1 className={styles.title}>Secure shelf for <br /> stability</h1>
            <h1 className={styles.text}>“EasyShelfs” secure shelf feature <br /> ensures that the shoe shelf remains <br /> stable and secure, providing a safe <br /> and convenient shoe-putting <br /> experience for disabled individuals.</h1>
          </div>
      </div>

      <Image src={Group_3} alt="#" className={styles.img_8} />
    </main>
  )
}

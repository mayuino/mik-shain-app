import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function User() {
  return (

    <div className={styles.container}>
      <Head>
        <title>社員ページ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Image src="/MIKpage_title_white.jpg" alt="title" width={683} height={138} />

      <div className={styles.userinfo}>
        <div>
          <div className={styles.userphoto_name}>
          <Image src="/userphoto1.png" alt="user1" width={167} height={159}/>
          <h2>絵夢　愛</h2>
          </div>
          <div className={styles.userinfo_contents}>
          <h3>入社日</h3> 
          <p>2022年10月1日</p>
          <h3>派遣先</h3> 
           <p>株式会社ABC</p>
           <h3>派遣開始</h3> 
           <p>2022年10月1日</p>
           </div>
        </div>

      </div>
      </main>
     </div>
  )
}
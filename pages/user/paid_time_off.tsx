import Head from 'next/head'
import Image from 'next/image'
import styles from './paid_time_off.module.css'
import Link from 'next/link'

export default function User() {
  return (

    <div className={styles.container}>
      <Head>
        <title>有給休暇申請</title>
        <meta name="description" content="有給休暇申請用ページ" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

      <main >
        <header className={styles.header}>
        <Image src="/MIKpage_title_white.jpg" alt="title" width={683} height={138} />
        </header>
      

      <div className={styles.userinfo}>
        <div>
          <div className={styles.userinfo1}>
          <Image src="/userphoto1.png" alt="user1" width={167} height={159}/>
          <h2 className='mt-2'>井上真美</h2>
          </div>

          <div className={styles.userinfo2}>
            <h3 className='font-bold'>入社日</h3> 
            <p className='mt-2 mb-2'>2022年10月1日</p>
            <h3 className='font-bold'>派遣先</h3> 
            <p className='mt-2 mb-2'>株式会社ABC</p>
            <h3 className='font-bold'>派遣開始</h3> 
            <p className='mt-2 mb-2'>2022年10月1日</p>
           </div>
        </div>
      </div>

      <div className={styles.point_detail}>
        <h1 className='font-bold'>有給休暇申請</h1>

        <div className={styles.now_point}>
          <h3>あなたの有給残日数</h3>
          <p>10日</p>
        </div>


      </div>

      <div className={styles.use_point}>
        <h2 className="font-bold text-2xl">有給休暇を申請する</h2>
          <div className={styles.use_point_apply}>
            <h4>利用ポイント</h4>
            <div className={styles.inputbox}>
            <input type="text" id="use_point" name="use_point"></input>
            <h5>ポイント</h5></div>

            <div className={styles.moneychange}><h4>換金金額</h4>
            <p>3000円</p>
            </div>

            <div className={styles.rest_point}>
            <h4>残ポイント</h4>
            <p>30ポイント</p>
            </div>
         
          <div className={styles.button}><h3 className="font-bold">申請する</h3>
         </div> 
           </div>
         </div>
         <div className={styles.detail}>
          <h3 className='font-bold'>有給休暇利用履歴</h3>
          <div className={styles.detail_items}>
            <p>2022/10/1 1日</p>
            <p>2022/11/3 半日</p>
            <p>2022/11/7 半日</p>
            <p>2022/12/4 1日</p>
          </div>
        </div>

    <div className={styles.message}>
      <p>
        申請を受け付けました。
        申請金額3000円は、11月に支給される給与の「インセンティブ」として支払われます。
      </p>
    </div>

    <Link href={"/user/"}>
    <div className={styles.return_button}>
      <h3 className="font-bold">もどる</h3>
    </div>
    </Link>
   
      </main>
     </div>
  )
}

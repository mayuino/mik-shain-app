import Head from 'next/head'
import Image from 'next/image'
import styles from './contribute.module.css'
import Link from 'next/link'
import { useState } from 'react';

export default function User() {
  var defaultPoint :number = 550;
  const [input_point,setPoint] = useState("");
  var usePoint = pointValue(input_point);
  
  function pointValue(input_point:string){
    var pointInt:number = Number(input_point);
    if(Number.isNaN(pointInt))
    {
      return 0;
    }

    return pointInt;
  }
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    // if(defaultPoint>usePoint){
    //   return;
    // }
    setPoint(e.target.value);
  };

  function ChangeMoney(use_point:number){
    if(use_point > defaultPoint)
    {
      //ポイント上限以上を入力
       return 0;
    }
    else{
      
        var point_200_fee = 0;
        var point_100_fee =0;
        var point_50_fee = 0;
        var point_10_fee = 0;

        var rest_use_point = use_point;
        //200ポイント単位の金額を確認する
        if(rest_use_point >= 200){
          var point_200_change = Math.floor(use_point/200);
          point_200_fee = point_200_change*50000;
          rest_use_point = use_point-(point_200_change*200);
        }
        //100ポイント単位の金額を確認する
        if( rest_use_point>= 100){
            var point_100_change = Math.floor(rest_use_point/100);
            point_100_fee = point_100_change*23000;
            rest_use_point = rest_use_point-(point_100_change*100);
        }
        //50ポイント単位の金額を確認する
        if(rest_use_point>= 50){
            var point_50_change = Math.floor(rest_use_point/50);
            point_50_fee = point_50_change*11000;
            rest_use_point = rest_use_point-(point_50_change*50);
        }
        //10ポイント単位の金額を確認する
        if(rest_use_point>=10){
            var point_10_change = Math.floor(rest_use_point/10);
            point_10_fee= point_10_change*2000;
            rest_use_point = rest_use_point-(point_10_change*10);
        }

        return point_200_fee+point_100_fee+point_50_fee+point_10_fee;
      }
    }
  
    
  var insentiveFee : number = 0;
  insentiveFee = ChangeMoney(usePoint);

  function CalcRestPoint(){
    if(defaultPoint-usePoint<0)
    {return 0;}
    return defaultPoint-usePoint;
  }
  var restPoint = CalcRestPoint();


  return (

    <div className={styles.container}>
      <Head>
        <title>社内貢献ポイント</title>
        <meta name="description" content="社内貢献ポイント利用申請" />
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
        <h1 className='font-bold'>社内貢献ポイント</h1>

        <div className={styles.now_point}>
          <h3>現在の保有ポイント</h3>
          <p>{`${defaultPoint}`}pt</p>
        </div>

        <div className={styles.detail}>
          <h3 className='font-bold'>ポイント明細</h3>
          <div className={styles.detail_items}>
            <p>2022/10/30 皆勤賞 5pt</p>
            <p>2022/11/30 皆勤賞 5pt</p>
            <p>2022/10/30 皆勤賞 5pt</p>
            <p>2022/11/30 皆勤賞 5pt</p>
            <p>2022/12/3 友人紹介 200pt</p>
          </div>
        </div>
      </div>

      <div className={styles.use_point}>
        <h2 className="font-bold text-2xl">ポイントを利用する</h2>
          <div className={styles.use_point_apply}>
            <h4>利用ポイント</h4>
            <div className={styles.inputbox}>
            <input type="number" min={"10"} max={Math.floor(defaultPoint *10)} step={"10"} id="use_point" name="use_point" value={pointValue(input_point)} onChange={handleChange
            } placeholder={"10"}/>
            <h5>ポイント</h5></div>

            <div className={styles.moneychange}><h4>換金金額</h4>
            <p>{insentiveFee}円</p>
            </div>

            <div className={styles.rest_point}>
            <h4>残ポイント</h4>
            <p>{restPoint}ポイント</p>
            </div>
         
          <div className={styles.button}><h3 className="font-bold">申請する</h3>
         </div> 
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

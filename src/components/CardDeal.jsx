import React from 'react'
import styles,{layout} from '../style'
import { Client } from '../assets'
import Button from './Button'

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} sm:leading-[70px] leading-[55px]`}>
        Pixel-Perfect Web Design & Development
        </h2>
        <p className={`${styles.paragraph} max-w-[80%] mt-5`}>
        Dive into the world of Web Wonders Crafting with Zuma Consults. Our expert designers and developers team up to create websites that are not just pretty, but powerful. From eye-catching visuals to smooth functionality, we turn your online presence into a masterpiece, ensuring your website stands out in the digital crowd.
        </p>
        <Button styles={`mt-10`}/>
 
      </div>
      <div className={layout.sectionImg}>
        <img src={Client} alt="card" className='w-[100%] h-[100%] relative z-[5]' />

      </div>

    </section>
  )


export default CardDeal
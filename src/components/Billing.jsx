import React from 'react'
import styles, {layout} from '../style'
import {apple, Services, google} from '../assets'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div
      data-aos="fade-right" 
      className={layout.sectionImgReverse}>
        <img src={Services} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[3] -left-1/2 buttom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div 
      data-aos="fade-left" 
      className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} sm:leading-[70px] leading-[55px]`}>
        Product Management and Excellence

        </h2>
        <p  className={`${styles.paragraph} max-w-[80%] mt-5`}>
        Boost your products to new heights with Zuma Consults' Product Prosperity Partners. We're your go-to team for making sure your products shine. From the first idea to the final launch, we handle the details, so you can focus on what you do best. Let's turn your product dreams into a success story together. 🚀 

        </p>
        {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt=" apple" className='w-[128px] h-[48] object-contain mr-5 cursor-pointer' />
          <img src={google} alt=" apple" className='w-[128px] h-[48] object-contain mr-5 cursor-pointer' />


        </div> */}
      </div>
    </section>
  )
}

export default Billing

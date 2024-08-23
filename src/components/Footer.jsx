import React from 'react'
import styles from '../style'
import { ZumaLogo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const FooterPage = () =>  (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className='w-full flex justify-between sm:flex-row flex-col border-t-[1px] border-t-[#3f3e45] items-center pt-6 '>
      <img src={ZumaLogo} alt="logo" className='w-[70px] h-[70px] object-contain' />
        <p className='font-poppins text-white text-[18px] leading-[27px] text- normal text-center'>Okike Consults Limited All Right Reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6'>
          <div className='text-white mr-2'> Email: <span className='text-white font-bold'> Info@zumaconsults.com</span></div>
          {socialMedia.map((social,index)=>(
           <a href={social.link} target='_blank'><img key={social.id} src={social.icon} alt={social.id} className={`w-[22px] h-[21] object-contain cursor-pointer mx-2`} /></a>
          ))}

        </div>
      </div>
    </section>
  )


export default FooterPage

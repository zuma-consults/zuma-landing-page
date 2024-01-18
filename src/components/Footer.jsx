import React from 'react'
import styles from '../style'
import { ZumaLogo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const FooterPage = () =>  (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      {/* <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex items-start justify-center mr-10'>
          <img src={ZumaLogo} alt="logo" className='w-[200px] h-[200px] object-contain rounded-full' />
        </div>
        <div className='flex flex-[1.5] flex-row w-full justify-between flex-wrap md:mt-0 mt-10 '>
          {footerLinks.map((footerlink)=>(
            <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 max-w-[150px]'>
              <h1 className='font-poppins text-white text-[18px] leading-[27px] text-medium'>
                {footerlink.title}
              </h1>
              <ul>
                {footerlink.links.map((link)=>(
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite  hover:text-secondary cursor-pointer my-3`}>
                    {link.name}
                  </li>
                ))}
              </ul>
             
            </div>
          ))}

        </div>

      </div> */}
      <div className='w-full flex justify-between sm:flex-row flex-col border-t-[1px] border-t-[#3f3e45] items-center pt-6 '>
      <img src={ZumaLogo} alt="logo" className='w-[100px] h-[100px] object-contain rounded-full' />
        <p className='font-poppins text-white text-[18px] leading-[27px] text- normal text-center'>2023 Zuma Consults All Right Reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social,index)=>(
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[22px] h-[21] object-contain cursor-pointer mx-2`} />
          ))}

        </div>
      </div>
    </section>
  )


export default FooterPage

import React from 'react'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import { feedback } from '../constants'


const Testimonials = () =>  (
    <section id='testimonials' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
      {/* <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>
        Unleash Your Brand's Digital Power
        </h1>
        <div className={`w-full md:mt-0 mt6`}>
           <p className={`${styles.paragraph} max-w-[90%] text-left`}>
           Step into the age of Digital Dynamo Marketing with Okike Consults. Our team of marketing maestros uses the latest digital tricks to boost your brand. From social media magic to search engine savvy, we'll make sure your message reaches the right audience at the right time. Let's ignite your online presence and take your brand to the next level.</p>
        </div>

      </div> */}
      <h1 className={styles.heading2}>
       Testimonals from Clients
        </h1>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      
        {feedback.map ( (card)=>(
        <FeedbackCard key={card.id} {...card}/>
        ))}
      
      </div>

    </section>
  )


export default Testimonials
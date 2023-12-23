import React from "react";
import styles from "../style";
import { robot, discount, HeroImg } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row item-center px-4 bg-gradient-to-l from-black via-gray-800 to-gray-900 rounded-[10px] mb-2 ">
        {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
        <p className={`${styles.paragraph}`}>
          <span className="text-white mr-1">Innovate</span>
          Elevate {""}
          <span className="text-white">Captivate</span>
          {""} Ideas
        </p>
      </div>
      <div className="flex flex-rox justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] capitalize text-[52px] text-white ss:leading-[80px] leading-[75px]">
        Crafting Digital Excellence,<br className="sm:block hidden" />
          <span className="text-gradien-to-l from-black via-gray-800">
            {" "}
            Forging Success
          </span>
          <br className="sm:block hidden" />
        </h1>
        {/* <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div> */}
      </div>
      {/* <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        PAYMENT METHOD.
      </h1> */}
      
        <p className={`${styles.paragraph} w-[100] mt-5`}>
        Welcome to Zuma Consults, Your Trusted Partner in Digital Innovation! 🚀 With a legacy of over 10 years in expert consulting, we specialize in crafting bespoke digital solutions that transcend challenges and elevate innovation to new heights.
        </p>x
    
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
      <img src={HeroImg} alt="billing"
      style={{objectFit:'contain'}}
      className="w-[80%] h-[100%] relative z-[5]" />
{/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
<div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
<div className="absolute z-[0] w-[50%] h-[50%] right-20 buttom-20 blue__gradient"/> */}
    </div>
  </section>
);

export default Hero;

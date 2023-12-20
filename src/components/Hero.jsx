import React from "react";
import styles from "../style";
import { robot, discount } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row item-center px-4 bg-gradient-to-l from-black via-gray-800 to-gray-900 rounded-[10px] mb-2 ">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white mr-1">20%</span>
          discount for {""}
          <span className="text-white">one month</span>
          {""} account
        </p>
      </div>
      <div className="flex flex-rox justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          YOU THINK <br className="sm:block hidden" />
          <span className="text-gradien-to-l from-black via-gray-800">
            {" "}
            IT WE BUILD IT
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
          Welcome to zuma Consults We're here to revolutionize tech with
          innovation, a passionate team, user-centric solutions, and open
          communication. We're committed to making a positive impact, supporting
          our community, and providing top-notch customer service.
        </p>
    
    </div>
    <div className="flex-1">
      <img src={robot} alt="billing"
      style={{objectFit:'contain'}}
      className="w-[100%] h-[95%] relative z-[5]" />
    </div>
  </section>
);

export default Hero;

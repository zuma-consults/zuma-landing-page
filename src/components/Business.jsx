import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content,index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index!==features.length-1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded ${styles.flexCenter} bg-dimblue`}>
      <img src={icon} alt="icons" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h1 className="font-poppins text-[20px] leadings-[23px] font-semibold">
        {title}
      </h1>
      <p className="font-poppins text-[16px] leadings-[28px] font-normal">
        {content}
      </p>

    </div>
  </div>
);

const Business = () => {
  return (
    <section className={layout.section} id="whyUs">
      <div 
       data-aos="fade-right"
      className={layout.sectionInfo}>
        <h1 className={`${styles.heading2} sm:leading-[80px] leading-[55px] `}>
          Okike Consults Where
          <br className="sm:block hidden" /> Tech Dreams Take Flight
        </h1>
        <p className={`${styles.paragraph} max-w-[90%]`}>
          Step into the future with Okike Consults. We're not just reimagining
          tech; we're making it happen. Join us as we turn dreams into reality.
          Innovate with us at Okike and let your tech journey take flight! 🚀
        </p>
        <Button styles="mt-10" />
      </div>
      <div 
      data-aos="fade-left"
       className={`${layout.sectionImg} flex-col text-white`}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;

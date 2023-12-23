import React from "react";
import { stats } from "../constants";
import styles from "../style";

const StatComp = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex-row items-center justify-center flex m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading [43px] text-white ">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[22px] text-[18px] xs:leading-[26px] leading [21px] text-white text-gradient uppercase ml-3 ">{stat.title}</p>
      </div>
    ))}
  </section>
);

export default StatComp;

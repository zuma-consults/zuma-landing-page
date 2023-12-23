import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex flex-1 flex-col">
      <h1 className={`${styles.heading2} sm:leading-[100px] leading-[55px]`}>
        Let's try our service now!
      </h1>
      <p className={`${styles.paragraph} max-w-[50%] mt-5`}>
        Dive into innovation with Zuma Consults Try our service now, request for a Demo and
        experience tech like never before🚀
      </p>
    </div>
    <div>
      <Button className={` ${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`} />
    </div>
  </section>
);

export default CTA;

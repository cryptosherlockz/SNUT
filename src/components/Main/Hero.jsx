import React, { Fragment } from "react";
import { heroIcons } from "../../data/constants";
import HeroButtons from "./HeroButtons";
import { motion } from "framer-motion";
import BuyBox from "./BuyBox";

export default function Hero() {
  return (
    <Fragment>
      <div
        className="flex md:flex-row flex-col justify-center pt-10 ss:mt-[200px] mt-[100px] sm:gap-20 gap-10 pl-[50px]"
        id="HOME"
      >
        <div className="flex flex-col gap-2 mt-[50px]">
          <motion.img
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 60,
            }}
            viewport={{ once: true, amount: 0.5 }}
            src="/images/Hero/MASTER.png"
            alt="master"
            className="md:w-[200px] w-[150px]"
          />
          <motion.p
            initial={{ opacity: 0, translateX: "-50%" }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 60,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-black font-Comfortaa md:w-[300px] w-[250px] xs:text-[15px] text-[12px] font-bold"
          >
            Whether the Frogs or Dogeies, they all need a Master, $MASTER is
            here to Pet everyone Remember: Dogeies are the OG's
          </motion.p>
          <div className="flex md:w-12 xs:w-10 w-7 gap-3 mt-5">
            {heroIcons.map((icon, idx) => {
              return (
                <motion.img
                  initial={{ opacity: 0, translateY: "-100%" }}
                  whileInView={{ opacity: 1, translateY: "0%" }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 70,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  key={icon.tittle}
                  src={`/images/Hero/${icon.image}.png`}
                  alt={icon.tittle}
                  loading="lazy"
                  className="cursor-pointer"
                />
              );
            })}
          </div>
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, translateX: "50%" }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 70,
            }}
            viewport={{ once: true, amount: 0.5 }}
            src="/images/Hero/MASTERRR.png"
            alt="herogif"
            className="md:mx-0 mx-auto w-[400px]"
          />
        </div>

        <BuyBox />
        {/* <motion.img
          initial={{ opacity: 0, translateY: "-100%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 60,
          }}
          src="/images/Hero/rightpepe.png"
          alt="pepekill"
          loading="lazy"
          className="md:relative absolute right-0 md:top-[-200px] ss:top-[100px] top-[50px] lg:h-[40rem] ss:h-[30rem] h-[20rem] -z-10"
        /> */}
      </div>
      <HeroButtons />
    </Fragment>
  );
}

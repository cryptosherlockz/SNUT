import React, { Fragment } from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Fragment>
      <div
        className=" mt-[200px] flex sm:flex-row flex-col justify-center sm:gap-20 gap-5"
        id="ABOUT"
      >
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
          src="/images/About/masterboii.png"
          alt="fukpepe"
          className=" w-[350px] h-[350px] sm:mx-0 mx-auto mt-[30px]"
        />
        <div className="flex flex-col ">
          <motion.h1
            className="text-black font-inter text-[60px] stroke-black text-center font-black"
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            ABOUT
          </motion.h1>
          <motion.p
            className="w-[300px] font-Comfortaa text-black mt-5  sm:text-left text-center mx-auto font-bold leading-5"
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 60,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Success Kid is tired of seeing this Dogeies & Frogs fight and they
            all need a Master to pet them!
            <br />
            <br />
            $MASTER is the Master of Memes <br />
            <ul className="list-disc relative left-5 mt-1">
              <li> No presale </li>
              <li> No Tax</li>
              <li>No VCs</li>
              <li>No slippage</li>
              <li>No NFTs</li>
              <li>No Bullshit LP Burnt</li>
              <li>Contract Renounced</li>
              <li>Only DEGENS</li>
            </ul>
            <br />
            $MASTER will F*** all the memecoins
          </motion.p>
        </div>
      </div>
    </Fragment>
  );
}
